"use client";

import { motion } from "framer-motion";

const HIGHLIGHTS = [
    {
        n: "02",
        title: "Recover, don't mine",
        body: "Pull germanium as a byproduct of existing zinc and coal-ash processing rather than opening new extraction.",
    },
    {
        n: "04",
        title: "Model the yield",
        body: "Projected recovery rate against the current baseline, with the assumptions shown, not hidden.",
    },
    {
        n: "06",
        title: "Know the buyer",
        body: "Who needs this supply and why the timing matters right now.",
    },
];

export default function SolutionSection() {
    return (
        <section className="relative bg-[var(--mx-ink)] px-6 py-28 text-[var(--mx-canvas)] sm:px-10 sm:py-36">
            <div className="mx-auto max-w-5xl">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]"
                >
                    04 — Our Solution
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="mt-5 max-w-xl font-serif italic text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl"
                >
                    A new path to germanium.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-6 max-w-[58ch] text-base leading-relaxed text-[var(--mx-canvas)]/70 sm:text-lg"
                >
                    Placeholder proposal summary — the full case, numbers, and sourcing
                    go here once the research is final.
                </motion.p>

                <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
                    {HIGHLIGHTS.map((h, i) => (
                        <motion.div
                            key={h.n}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-15% 0px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="border-t border-[var(--mx-canvas)]/15 pt-6"
                        >
                            <span className="font-mono text-sm text-[var(--mx-accent)]">
                                {h.n}
                            </span>
                            <h3 className="mt-3 text-xl font-medium">{h.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-[var(--mx-canvas)]/65">
                                {h.body}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.a
                    href="#"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 inline-flex items-center gap-2 rounded-full bg-[var(--mx-accent)] px-6 py-3 text-sm font-medium text-[var(--mx-accent-foreground)] transition-opacity hover:opacity-90"
                >
                    See the full research
                </motion.a>
            </div>
        </section>
    );
}
