"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import VideoPlaceholder from "@/components/video-placeholder";

// Shot list for the 6 clips the real site needs (scenes 1–7 of the
// scrollytelling script; scenes 2 and 3 share one clip here). See
// docs/research/maverickx-germanium-plan.md for the full shot
// descriptions.
const REELS = [
    { label: "Scene 1 — The Hook" },
    { label: "Scene 2/3 — The Metals & The Squeeze" },
    { label: "Scene 4 — Hidden Supply" },
    { label: "Scene 5 — The Bottleneck" },
    { label: "Scene 6 — Our Solution" },
    { label: "Scene 7 — The Chain" },
];

/**
 * Scroll-tied horizontal slide: the outer section provides vertical scroll
 * distance, the track inside translates sideways in lockstep (same
 * sticky + useScroll pattern as the tunnel hero, just driving translateX
 * instead of z-depth). Video panels are placeholders for Higgsfield clips.
 */
export default function HorizontalGallery() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const [travel, setTravel] = useState(0);

    useEffect(() => {
        const measure = () => {
            const trackWidth = trackRef.current?.scrollWidth ?? 0;
            const viewportWidth = viewportRef.current?.clientWidth ?? 0;
            setTravel(Math.max(0, trackWidth - viewportWidth));
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

    return (
        <section ref={sectionRef} className="relative h-[220vh] bg-[var(--mx-canvas)]">
            <div
                ref={viewportRef}
                className="sticky top-0 flex h-[100svh] w-full flex-col justify-center overflow-hidden px-6 sm:px-10"
            >
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]">
                    05 — The Shot List
                </p>
                <h2 className="mt-4 max-w-xl font-serif italic text-3xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-4xl md:text-5xl">
                    Six clips, one per scene.
                </h2>

                <motion.div
                    ref={trackRef}
                    style={{ x }}
                    className="mt-12 flex w-max gap-6"
                >
                    {REELS.map((reel) => (
                        <VideoPlaceholder
                            key={reel.label}
                            label={reel.label}
                            className="w-[78vw] shrink-0 sm:w-[46vw] lg:w-[32vw]"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
