"use client";

import { motion } from "framer-motion";
import DotGrid from "@/components/dot-grid";

const STATS = [
    { value: "~60%", label: "of germanium supply is China's", source: "Skillings" },
    { value: "−67%", label: "US germanium imports, 2024 → 2025", source: "Payne Institute" },
    { value: "0", label: "primary germanium refined in the US, 2025", source: "Metal Tech News" },
];

export default function ProblemSection() {
    return (
        <section className="relative bg-[var(--mx-canvas)] px-6 py-28 sm:px-10 sm:py-36">
            <DotGrid />
            <div className="mx-auto max-w-3xl">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]"
                >
                    02 — The Squeeze
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="mt-5 font-serif italic text-4xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-5xl md:text-6xl"
                >
                    The US refined zero
                    <br />
                    germanium last year.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-8 max-w-[58ch] text-base leading-relaxed text-[var(--mx-faint)] sm:text-lg"
                >
                    Light needs germanium, power needs gallium — and China controls
                    both. Its pause on export controls for both metals ends{" "}
                    <span className="text-[var(--mx-ink)]">Nov 27, 2026</span>{" "}
                    <span className="text-xs">(Evertiq)</span>.
                </motion.p>

                <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.value}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-15% 0px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="border-t border-[var(--mx-ink)]/10 pt-6"
                        >
                            <span className="font-serif italic text-3xl text-[var(--mx-ink)]">
                                {stat.value}
                            </span>
                            <p className="mt-2 text-sm leading-relaxed text-[var(--mx-faint)]">
                                {stat.label}
                            </p>
                            <p className="mt-1 text-xs text-[var(--mx-faint)]/70">
                                {stat.source}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
