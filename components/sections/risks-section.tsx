"use client";

import { motion } from "framer-motion";
import DotGrid from "@/components/dot-grid";

const RISKS = [
    {
        risk: "13,000 kg isn't proven",
        handle: "We always say \"up to\" and \"being evaluated.\"",
    },
    {
        risk: "Siderophore isn't reusable yet",
        handle: "Single-use pyoverdine barely breaks even — the 90-day test measures reuse.",
    },
    {
        risk: "Tannin is cheap",
        handle: "By mass, siderophore use is similar to tannin. We win on selectivity and reuse, not price.",
    },
    {
        risk: "Titan already has a partner",
        handle: "We're a supplier into the Titan–Teck path, not a competitor to Teck.",
    },
];

export default function RisksSection() {
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
                    09 — What Could Go Wrong
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="mt-5 font-serif tracking-tight text-4xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-5xl"
                >
                    We&apos;d rather you hear
                    <br />
                    it from us first.
                </motion.h2>

                <div className="mt-12 divide-y divide-[var(--mx-ink)]/10">
                    {RISKS.map((item, i) => (
                        <motion.div
                            key={item.risk}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-15% 0px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
                        >
                            <span className="shrink-0 text-sm font-medium text-[var(--mx-ink)] sm:w-[15ch]">
                                {item.risk}
                            </span>
                            <span className="text-sm leading-relaxed text-[var(--mx-faint)]">
                                {item.handle}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
