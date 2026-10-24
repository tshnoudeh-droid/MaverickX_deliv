"use client";

import { motion } from "framer-motion";

export default function HiddenSupplySection() {
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
                    03 — Hidden Supply
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="mt-5 font-serif italic text-4xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-5xl md:text-6xl"
                >
                    Up to 13,000 kg a year is
                    <br />
                    sitting in one mine&apos;s waste.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-8 max-w-[58ch] text-base leading-relaxed text-[var(--mx-faint)] sm:text-lg"
                >
                    One New York zinc mine — Titan — has up to ~13,000 kg/yr of
                    contained germanium in its tailings, which it and Teck are
                    evaluating for recovery{" "}
                    <span className="text-xs">(Titan release / Metal Tech News)</span>.
                    That&apos;s worth roughly{" "}
                    <span className="text-[var(--mx-ink)]">$78M/yr</span> at $6,000/kg{" "}
                    <span className="text-xs">(SMM)</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-14 rounded-2xl border border-dashed border-[var(--mx-ink)]/15 bg-[var(--mx-canvas-dim)] p-6 sm:p-8"
                >
                    <p className="font-serif italic text-2xl text-[var(--mx-ink)] sm:text-3xl">
                        Two tailings ponds, more than a year of world demand.
                    </p>
                    <p className="mt-3 max-w-[56ch] text-sm leading-relaxed text-[var(--mx-faint)]">
                        Titan&apos;s Edwards and No. 4 ponds together hold an estimated
                        ~460–750 t of contained germanium — against ~343 t of global
                        demand in 2025{" "}
                        <span className="text-xs">(S&amp;P Global)</span>. Only part of that
                        would ever be recoverable, and the 13,000 kg/yr figure is{" "}
                        <span className="text-[var(--mx-ink)]">
                            our estimate from 7 samples, not a proven resource
                        </span>
                        .
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
