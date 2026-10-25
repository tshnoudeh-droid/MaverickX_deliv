"use client";

import { motion } from "framer-motion";
import DotGrid from "@/components/dot-grid";

const IDEAS = [
    {
        n: "01",
        title: "Biofilm",
        verdict: "Killed",
        body: "Industry already uses glycol for this — no opening.",
    },
    {
        n: "02",
        title: "Desalination pretreatment",
        verdict: "Killed",
        body: "Our cost ran ~$55/bbl against a ~$0.20/bbl target. Not close.",
    },
    {
        n: "03",
        title: "Germanium",
        verdict: "Survived",
        body: "High value per kg, an existing buyer (Teck), and a paid-test path. The one that holds up.",
    },
];

export default function ReasoningSection() {
    return (
        <section className="relative bg-[var(--mx-canvas)] px-6 py-28 sm:px-10 sm:py-36">
            <DotGrid />
            <div className="mx-auto max-w-5xl">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]"
                >
                    08 — Our Reasoning
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="mt-5 max-w-xl font-serif tracking-tight text-4xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-5xl md:text-6xl"
                >
                    How we got here: 3 ideas,
                    <br />
                    2 killed by the numbers.
                </motion.h2>

                <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
                    {IDEAS.map((idea, i) => (
                        <motion.div
                            key={idea.n}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-15% 0px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="border-t border-[var(--mx-ink)]/10 pt-6"
                        >
                            <div className="flex items-baseline justify-between">
                                <span className="font-mono text-sm text-[var(--mx-accent)]">
                                    {idea.n}
                                </span>
                                <span
                                    className={`font-mono text-[11px] uppercase tracking-[0.15em] ${
                                        idea.verdict === "Killed"
                                            ? "text-[var(--mx-faint)]"
                                            : "text-[var(--mx-accent)]"
                                    }`}
                                >
                                    {idea.verdict}
                                </span>
                            </div>
                            <h3 className="mt-3 text-xl font-medium text-[var(--mx-ink)]">
                                {idea.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-[var(--mx-faint)]">
                                {idea.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
