"use client";

import Link from "next/link";
import Reveal from "./reveal";
import ProgressDots from "./progress-dots";

/** Large "next →" block ending every deep page (B2): the primary path
 * through the site. Names the next question, not just the next page. */
export default function NextBlock({
    question,
    href,
    label,
}: {
    /** The question this hands him to, e.g. "So how do we recover it?" */
    question: string;
    href: string;
    /** Short link label, e.g. "The Solution" */
    label: string;
}) {
    return (
        <section className="relative border-t border-[var(--mx-ink)]/10 bg-[var(--mx-canvas)] px-6 py-20 sm:px-10">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
                <Reveal>
                    <ProgressDots />
                </Reveal>
                <Reveal delay={0.05}>
                    <Link
                        href={href}
                        className="group flex flex-col items-center gap-3"
                    >
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-faint)]">
                            Next
                        </span>
                        <span className="font-serif tracking-tight text-3xl font-medium text-[var(--mx-ink)] transition-colors group-hover:text-[var(--mx-accent)] sm:text-4xl">
                            {question}
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--mx-accent)]">
                            {label} →
                        </span>
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
