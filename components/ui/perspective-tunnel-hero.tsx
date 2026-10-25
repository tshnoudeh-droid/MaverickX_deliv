"use client";

import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion,
    useMotionValue,
    useSpring,
    MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import DotGrid from "@/components/dot-grid";

const IMAGES = [
    { src: "https://cdn.21st.dev/assets/mirror/c3/c3fbd2afa140223999a441b32ed986f61d473930002708df805a81532a326aac.jpg", title: "01 — The Hook" },
    { src: "https://cdn.21st.dev/assets/mirror/9d/9d8b2f675a5814476ada3736ce439bcda23c5c389e0ebf9b25d8a0c09f3bbcfe.jpg", title: "02 — The Metals" },
    { src: "https://cdn.21st.dev/assets/mirror/8b/8bb738bf2f00d7f7ed3c3ec034adb9938ad38f4be4ac191d632a6a11ad525574.jpg", title: "03 — The Squeeze" },
    { src: "https://cdn.21st.dev/assets/mirror/ac/ac5ac700b188d7ef16ee9dab868098b59f15c440db3f71d4e8c03262a3287577.jpg", title: "04 — Hidden Supply" },
    { src: "https://cdn.21st.dev/assets/mirror/ef/ef25eff6ce655fba459b3b7e7711524dc92499aa18f6c7dbea9a0fcc56a8f908.jpg", title: "05 — The Bottleneck" },
    { src: "https://cdn.21st.dev/assets/mirror/f2/f28b370a5dcbf76240f1504579c4b05fc0ff0bb990a42aff8dc2f73a5dc46072.jpg", title: "06 — Our Solution" },
    { src: "https://cdn.21st.dev/assets/mirror/f2/f26a1eac85704dda924820392dedfb72d51d8261d35354f83b35d683617295f3.jpg", title: "07 — The Chain" },
    { src: "https://cdn.21st.dev/assets/mirror/77/7755d23eaaa0aa5b403343f44afa7a29b2d06d3065fe54c602b14ba01d00f2aa.jpg", title: "08 — Our Reasoning" },
    { src: "https://cdn.21st.dev/assets/mirror/65/657317761fe9058a1d43711b13c543a71eb5199b7a5d9abf4c28479674e39cf7.jpg", title: "09 — The Offer" },
];

interface TunnelCardData {
    item: { src: string; title: string };
    angleCos: number;
    angleSin: number;
    radiusFactorX: number;
    radiusFactorY: number;
    rotationZ: number;
    index: number;
}

const TUNNEL_CARDS: TunnelCardData[] = IMAGES.map((item, i) => {
    const goldenAngle = i * 137.5 * (Math.PI / 180);
    const radiusFactorX = 0.28 + (i % 3) * 0.08;
    const radiusFactorY = 0.26 + (i % 2) * 0.09;

    return {
        item,
        angleCos: Math.cos(goldenAngle),
        angleSin: Math.sin(goldenAngle),
        radiusFactorX,
        radiusFactorY,
        rotationZ: (i % 2 === 0 ? 1 : -1) * (3 + (i % 5) * 2),
        index: i,
    };
});

const SPRING_CONFIG = { stiffness: 60, damping: 25, mass: 0.5 };

interface StageDimensions {
    width: number;
    height: number;
    isMobile: boolean;
}

function useCameraParallax(enabled: boolean) {
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const x = useSpring(rawX, SPRING_CONFIG);
    const y = useSpring(rawY, SPRING_CONFIG);

    useEffect(() => {
        if (!enabled) return;
        const onMove = (e: PointerEvent) => {
            rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
            rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, [enabled, rawX, rawY]);

    return { x, y };
}

interface TunnelCardProps {
    card: TunnelCardData;
    progress: MotionValue<number>;
    pointer: { x: MotionValue<number>; y: MotionValue<number> };
    total: number;
    stage: StageDimensions;
}

function TunnelCard({ card, progress, pointer, total, stage }: TunnelCardProps) {
    const staggerSpan = 0.55;
    const start = (card.index / total) * (1 - staggerSpan);
    const end = start + staggerSpan;

    const localProgress = useTransform(progress, [start, end], [0, 1]);

    const farZ = stage.isMobile ? -1200 : -1700;
    const nearZ = stage.isMobile ? 350 : 500;
    const z = useTransform(localProgress, [0, 1], [farZ, nearZ]);

    const opacity = useTransform(localProgress, [0, 0.18, 0.82, 0.98], [0, 1, 1, 0]);

    const cardWidth = stage.isMobile
        ? Math.max(130, Math.min(180, stage.width * 0.38))
        : Math.max(180, Math.min(270, stage.width * 0.18));

    const baseX = card.angleCos * (stage.width * card.radiusFactorX);
    const baseY = card.angleSin * (stage.height * card.radiusFactorY);
    const panStrength = stage.isMobile ? 20 : 45;

    const transform = useTransform(
        [z, pointer.x, pointer.y],
        ([currZ, px, py]: number[]) => {
            const offsetX = baseX - px * panStrength;
            const offsetY = baseY - py * panStrength;
            return `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), ${currZ}px) rotateZ(${card.rotationZ}deg)`;
        }
    );

    return (
        <motion.div
            style={{
                width: cardWidth,
                transform,
                opacity,
                zIndex: card.index + 1,
            }}
            className="pointer-events-auto absolute left-1/2 top-1/2 aspect-[4/5] will-change-transform select-none cursor-pointer"
        >
            <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-[var(--mx-canvas-dim)] shadow-2xl shadow-black/20 ring-1 ring-black/10 transition-all duration-500 hover:ring-[var(--mx-accent)]/70 hover:shadow-[var(--mx-accent)]/20">
                <img
                    src={card.item.src}
                    alt={card.item.title}
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end p-4 sm:p-5">
                    <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-white/95 drop-shadow-md">
                        {card.item.title}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

/**
 * Opening act of the immersive experience: a 3D card tunnel whose depth is
 * driven by real page scroll (via Lenis + Framer's useScroll), not a
 * wheel-hijacked single screen. The section is tall (300vh of scroll
 * distance); a sticky inner viewport holds the rendered scene while the
 * outer height gives the scrollbar somewhere to travel.
 */
export default function PerspectiveTunnelHero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    const [stage, setStage] = useState<StageDimensions>({
        width: 1440,
        height: 900,
        isMobile: false,
    });

    useEffect(() => {
        const updateDimensions = () => {
            setStage({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: window.innerWidth < 768,
            });
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 30,
        restDelta: 0.0001,
    });

    const pointer = useCameraParallax(!reduce);

    const titleScale = useTransform(smoothProgress, [0, 0.5, 1], [0.7, 1, 1.35]);
    const titleOpacity = useTransform(smoothProgress, [0, 0.12, 0.85, 1], [0.25, 1, 1, 0]);
    const promptOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);

    return (
        <section ref={sectionRef} className="relative h-[300vh] bg-[var(--mx-canvas)]">
            <div
                className="sticky top-0 h-[100svh] w-full overflow-hidden text-[var(--mx-ink)] select-none flex items-center justify-center"
                style={{
                    perspective: stage.isMobile ? "900px" : "1200px",
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Shared dot-grid background, same everywhere on the site */}
                <DotGrid />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--mx-accent)_0%,transparent_70%)] opacity-[0.08]" />

                {/* Depth Ring Guides */}
                <div className="pointer-events-none absolute h-[48vmin] w-[48vmin] rounded-full border border-[var(--mx-accent)]/15" />
                <div className="pointer-events-none absolute h-[76vmin] w-[76vmin] rounded-full border border-dashed border-[var(--mx-ink)]/10" />

                {/* Central Anchor Typography */}
                <motion.div
                    style={{ scale: titleScale, opacity: titleOpacity }}
                    className="pointer-events-none z-0 flex flex-col items-center text-center px-6 max-w-xl"
                >
                    <p className="text-xs font-mono uppercase tracking-[0.4em] text-[var(--mx-accent)] mb-4">
                        MaverickX — TKS Deliverable
                    </p>
                    <h1 className="font-serif italic text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight leading-[0.95] text-[var(--mx-ink)]">
                        AI runs on
                        <br />
                        light and power.
                    </h1>
                    <p className="mt-4 max-w-[40ch] text-sm sm:text-base font-light text-[var(--mx-faint)]">
                        MaverickX can recover germanium — a metal AI&apos;s fiber-optic
                        networks depend on — from mine waste that&apos;s already been dug
                        up. Scroll to see how.
                    </p>
                </motion.div>

                {/* Scroll Prompt */}
                <motion.div
                    style={{ opacity: promptOpacity }}
                    className="pointer-events-none absolute bottom-8 z-20 flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[var(--mx-faint)]"
                >
                    <span>Scroll to Explore</span>
                    <div className="h-6 w-px bg-gradient-to-b from-[var(--mx-accent)] to-transparent" />
                </motion.div>

                {/* 3D Z-Space Plane */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {TUNNEL_CARDS.map((card, i) => (
                        <TunnelCard
                            key={i}
                            card={card}
                            progress={smoothProgress}
                            pointer={pointer}
                            total={TUNNEL_CARDS.length}
                            stage={stage}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
