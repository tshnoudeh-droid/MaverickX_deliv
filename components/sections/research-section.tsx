"use client";

import { motion } from "framer-motion";

const STEPS = [
    {
        n: "01",
        title: "Map the supply chain",
        body: "Where germanium comes from today, who controls it, and where the bottlenecks sit.",
    },
    {
        n: "02",
        title: "Model extraction pathways",
        body: "Compare recovery methods on cost, yield, and environmental footprint.",
    },
    {
        n: "03",
        title: "Validate with the research",
        body: "Stress-test every assumption against literature and expert input before it goes in the deck.",
    },
];

export default function ResearchSection() {
    return (
        <section className="relative bg-[var(--mx-canvas)] px-6 py-28 sm:px-10 sm:py-36">
            <div className="mx-auto max-w-5xl">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]"
                >
                    02 — Our Research
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="mt-5 max-w-xl font-serif italic text-4xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-5xl md:text-6xl"
                >
                    Three weeks. One answer.
                </motion.h2>

                <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={step.n}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-15% 0px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="border-t border-[var(--mx-ink)]/10 pt-6"
                        >
                            <span className="font-mono text-sm text-[var(--mx-accent)]">
                                {step.n}
                            </span>
                            <h3 className="mt-3 text-xl font-medium text-[var(--mx-ink)]">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-[var(--mx-faint)]">
                                {step.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
