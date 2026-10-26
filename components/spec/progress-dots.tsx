"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const STEPS = [
    { href: "/problem", label: "Problem" },
    { href: "/solution", label: "Solution" },
    { href: "/economics", label: "Economics" },
    { href: "/evidence", label: "Evidence" },
    { href: "/plan", label: "Plan" },
];

/** Five dots showing where the reader is in the sieve journey (B2).
 * Only rendered on the five deep pages — the homepage is the overview,
 * not a position in the sieve sequence. Dots before the current page
 * are filled (sieves already passed), the current one is the accent
 * color, later ones are hollow. */
export default function ProgressDots() {
    const pathname = usePathname();
    const currentIndex = STEPS.findIndex((s) => s.href === pathname);

    return (
        <div className="flex items-center gap-2" aria-label="Progress through the pitch">
            {STEPS.map((step, i) => {
                const passed = currentIndex >= 0 && i < currentIndex;
                const current = i === currentIndex;
                return (
                    <Link
                        key={step.href}
                        href={step.href}
                        aria-current={current ? "step" : undefined}
                        aria-label={step.label}
                        className="group flex items-center gap-2"
                    >
                        <span
                            className={`h-1.5 rounded-full transition-all ${
                                current
                                    ? "w-6 bg-[var(--mx-accent)]"
                                    : passed
                                      ? "w-1.5 bg-[var(--mx-ink)]/50"
                                      : "w-1.5 bg-[var(--mx-ink)]/15"
                            }`}
                        />
                    </Link>
                );
            })}
        </div>
    );
}
