"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

const MESSAGES: [number, string][] = [
    [0, "Scroll to charge"],
    [0.15, "Keep going"],
    [0.5, "Keep going"],
    [0.78, "Almost there"],
    [0.95, "Hold..."],
];

function messageFor(p: number) {
    let msg = MESSAGES[0][1];
    for (const [threshold, text] of MESSAGES) if (p >= threshold) msg = text;
    return msg;
}

const PARTICLES = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * Math.PI * 2;
    return { x: Math.cos(angle) * (420 + (i % 3) * 90), y: Math.sin(angle) * (420 + (i % 3) * 90) };
});

// Fixed wall-clock duration of continuous scrolling needed to fill the bar.
// Time-based (not delta-magnitude-based) so the fill rate is identical
// across mouse wheels, trackpads, and touch — no device fills it 10x
// faster than another.
const CHARGE_DURATION_MS = 5000;
// How long input can go quiet before we pause the fill (bridges the gaps
// between individual mouse-wheel notches without feeling like idle time).
const IDLE_GRACE_MS = 300;
const STORAGE_KEY = "mx-energy-gate-charged";

/**
 * Locks scroll on entry and only lets progress advance while the user is
 * actively scrolling forward, at a fixed rate, then at 100% plays an
 * explosion and hands scroll back to the page. Plays once per browser
 * session (sessionStorage) and skips itself entirely for
 * prefers-reduced-motion.
 */
export default function EnergyGate() {
    const reduce = useReducedMotion();
    const [progress, setProgress] = useState(0);
    const [exploding, setExploding] = useState(false);
    const [done, setDone] = useState(false);
    const explodingRef = useRef(false);
    const progressRef = useRef(0);
    const touchYRef = useRef<number | null>(null);
    const lenis = useLenis();

    useEffect(() => {
        const alreadyCharged =
            typeof sessionStorage !== "undefined" &&
            sessionStorage.getItem(STORAGE_KEY) === "1";
        if (reduce || alreadyCharged) {
            setDone(true);
            return;
        }

        // Lock both html and body — some browsers scroll the body even when
        // only the root element is set to overflow:hidden.
        const html = document.documentElement;
        const body = document.body;
        const prevHtmlOverflow = html.style.overflow;
        const prevBodyOverflow = body.style.overflow;
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
        lenis?.stop();

        // Lenis keeps its own internal scroll target and can drift from 0
        // while "stopped" (it still tracks input, it just doesn't render).
        // Force both the real scroll position and Lenis's target back to
        // the top on every tick while the gate is up, so there is nothing
        // to snap to once it unlocks.
        const pinToTop = () => {
            window.scrollTo(0, 0);
            lenis?.scrollTo(0, { immediate: true, force: true });
        };

        let rafId = 0;
        let last = performance.now();
        let activeUntil = 0;

        const trigger = () => {
            explodingRef.current = true;
            setExploding(true);
            sessionStorage.setItem(STORAGE_KEY, "1");
            pinToTop();
            window.setTimeout(() => {
                pinToTop();
                html.style.overflow = prevHtmlOverflow;
                body.style.overflow = prevBodyOverflow;
                lenis?.start();
                setDone(true);
            }, 900);
        };

        const tick = (now: number) => {
            const dt = now - last;
            last = now;
            if (!explodingRef.current) {
                if (window.scrollY !== 0) pinToTop();
                if (now < activeUntil) {
                    const next = Math.min(1, progressRef.current + dt / CHARGE_DURATION_MS);
                    progressRef.current = next;
                    setProgress(next);
                    if (next >= 1) trigger();
                }
                rafId = requestAnimationFrame(tick);
            }
        };
        rafId = requestAnimationFrame(tick);

        const markActive = () => {
            activeUntil = performance.now() + IDLE_GRACE_MS;
        };

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (e.deltaY > 0) markActive();
        };
        const onTouchStart = (e: TouchEvent) => {
            touchYRef.current = e.touches[0]?.clientY ?? null;
        };
        const onTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            if (touchYRef.current == null) return;
            const y = e.touches[0]?.clientY ?? touchYRef.current;
            if (touchYRef.current - y > 0) markActive(); // swipe up = scroll down
            touchYRef.current = y;
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: false });

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            html.style.overflow = prevHtmlOverflow;
            body.style.overflow = prevBodyOverflow;
        };
        // mount-once: all mutable reads go through refs
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reduce]);

    if (done) return null;

    const jitter =
        !exploding && progress > 0.6
            ? { x: [0, -(progress - 0.6) * 24, (progress - 0.6) * 24, 0] }
            : { x: 0 };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[var(--mx-ink)] text-[var(--mx-canvas)]"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 50%, var(--mx-accent) 0%, transparent 70%)",
                    }}
                    animate={{ opacity: 0.08 + progress * 0.4, scale: 1 + progress * 0.7 }}
                    transition={{ duration: 0.2 }}
                />

                <motion.div
                    animate={
                        exploding
                            ? { scale: [1, 1.3, 0], opacity: [1, 1, 0] }
                            : jitter
                    }
                    transition={
                        exploding
                            ? { duration: 0.6, ease: "easeOut" }
                            : { duration: 0.18, repeat: progress > 0.6 ? Infinity : 0 }
                    }
                    className="relative z-10 flex flex-col items-center gap-6 px-6"
                >
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]">
                        {messageFor(progress)}
                    </p>

                    <div className="relative h-2 w-[70vw] max-w-md overflow-hidden rounded-full bg-white/10">
                        <div
                            className="h-full rounded-full bg-[var(--mx-accent)] transition-[width] duration-100"
                            style={{ width: `${progress * 100}%` }}
                        />
                    </div>

                    <span className="font-serif italic text-5xl sm:text-6xl">
                        {Math.round(progress * 100)}%
                    </span>
                </motion.div>

                {exploding && (
                    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                        <motion.div
                            className="absolute h-full w-full bg-[var(--mx-canvas)]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.9, 0] }}
                            transition={{ duration: 0.5 }}
                        />
                        {PARTICLES.map((p, i) => (
                            <motion.span
                                key={i}
                                className="absolute h-1.5 w-1.5 rounded-full bg-[var(--mx-accent)]"
                                initial={{ x: 0, y: 0, opacity: 1 }}
                                animate={{ x: p.x, y: p.y, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        ))}
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
