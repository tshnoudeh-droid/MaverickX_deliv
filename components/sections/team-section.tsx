"use client";

import { motion } from "framer-motion";

const TEAM = [
    { initials: "SM", name: "Sidi Mohal", role: "TKS Delegate" },
    { initials: "DA", name: "Drishti Arora", role: "TKS Delegate" },
    { initials: "TS", name: "Tawfic Shnoudeh", role: "TKS Delegate" },
    { initials: "AS", name: "Armaan Sharma", role: "TKS Delegate" },
    { initials: "SV", name: "Sahana Venkataraman", role: "TKS Delegate" },
];

export default function TeamSection() {
    return (
        <section className="relative bg-[var(--mx-canvas)] px-6 py-28 sm:px-10 sm:py-36">
            <div className="mx-auto max-w-4xl">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]"
                >
                    Meet the Team
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="mt-5 font-serif italic text-4xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-5xl md:text-6xl"
                >
                    Built by five.
                </motion.h2>

                <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {TEAM.map((person, i) => (
                        <motion.div
                            key={person.initials}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-15% 0px" }}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            className="flex items-start gap-4"
                        >
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--mx-canvas-dim)] font-mono text-sm text-[var(--mx-ink)] ring-1 ring-[var(--mx-ink)]/10">
                                {person.initials}
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-[var(--mx-ink)]">
                                    {person.name}
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-[var(--mx-faint)]">
                                    {person.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
