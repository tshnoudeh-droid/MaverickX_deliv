"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

interface DotGridProps {
    /** Use canvas-colored dots instead of ink — for a section whose
     * background is itself inverted (e.g. SolutionSection's dark band),
     * so the dots stay visible at the same contrast as the section's text. */
    inverted?: boolean;
    className?: string;
}

/**
 * Shared dotted background texture, reused in every section for a
 * consistent feel site-wide. Colors come from the --mx-* tokens so it
 * follows light/dark automatically. Slightly interactive: a soft
 * accent-colored spotlight tracks the cursor within the section and
 * brightens the dots nearby.
 */
export default function DotGrid({ inverted = false, className = "" }: DotGridProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const onMove = (e: PointerEvent) => {
            const rect = el.getBoundingClientRect();
            el.style.setProperty("--dot-x", `${e.clientX - rect.left}px`);
            el.style.setProperty("--dot-y", `${e.clientY - rect.top}px`);
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    const dotColor = inverted ? "var(--mx-canvas)" : "var(--mx-ink)";

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
            style={{ "--dot-x": "50%", "--dot-y": "50%" } as CSSProperties}
        >
            {/* base faint grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                    opacity: 0.16,
                    maskImage:
                        "radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)",
                }}
            />
            {/* accent spotlight — follows the cursor, brightens nearby dots */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(var(--mx-accent) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    opacity: 0.85,
                    maskImage:
                        "radial-gradient(circle 140px at var(--dot-x) var(--dot-y), #000, transparent 70%)",
                    WebkitMaskImage:
                        "radial-gradient(circle 140px at var(--dot-x) var(--dot-y), #000, transparent 70%)",
                }}
            />
        </div>
    );
}
