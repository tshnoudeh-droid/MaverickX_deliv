"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
    return (
        <section className="relative bg-[var(--mx-canvas)] px-6 py-28 sm:px-10 sm:py-36">
            <div className="mx-auto max-w-3xl">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]"
                >
                    01 — The Problem
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="mt-5 font-serif italic text-4xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-5xl md:text-6xl"
                >
                    Germanium is scarce.
                    <br />
                    Demand isn&apos;t.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-8 max-w-[58ch] text-base leading-relaxed text-[var(--mx-faint)] sm:text-lg"
                >
                    Fiber optics, infrared optics, semiconductors, and solar all compete
                    for a supply that is geographically concentrated, mostly a byproduct
                    of other metal refining, and hard to scale on demand.{" "}
                    <span className="text-[var(--mx-ink)]">Placeholder — swap in the
                    sourced supply-chain research.</span>
                </motion.p>
            </div>
        </section>
    );
}
