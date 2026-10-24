"use client";

import { motion } from "framer-motion";

const STEPS = [
    {
        n: "01",
        title: "Mined and milled",
        body: "Germanium tags along as a trace in zinc ore, about 21 g/t in Titan's plant feed.",
        source: "SMM",
    },
    {
        n: "02",
        title: "Leached in acid",
        body: "Residue is leached with strong mineral acids to pull germanium into a dilute liquid.",
        source: "Penn State",
    },
    {
        n: "03",
        title: "The expensive step",
        body: "Capturing it from that liquid needs 8–10 g of tannin per g of germanium, or hazardous hydrogen sulfide — why under 3% is ever recovered.",
        source: "MDPI / CDC",
    },
];

export default function BottleneckSection() {
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
                    04 — The Bottleneck
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="mt-5 max-w-xl font-serif italic text-4xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-5xl md:text-6xl"
                >
                    Getting germanium out of
                    <br />
                    the liquid is the expensive part.
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
                            <p className="mt-2 text-xs text-[var(--mx-faint)]/70">
                                {step.source}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
