"use client";

import { motion } from "framer-motion";
import DotGrid from "@/components/dot-grid";

const OFFER = [
    { when: "Now", what: "Paid 90-day lab test on Titan's waste samples", cost: "~$25–75k" },
    { when: "2027–28", what: "Paid on-site pilot, cost shared with grants", cost: "Titan + government" },
    { when: "2029+", what: "Siderophore supply + 5–10% royalty", cost: "~$3.9–7.8M/yr (est.)" },
];

export default function ClosingCta() {
    return (
        <section className="relative flex flex-col items-center justify-center bg-[var(--mx-canvas)] px-6 py-28 text-center sm:px-10">
            <DotGrid />
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]"
            >
                11 — The Offer + Ask
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-5 max-w-2xl font-serif italic text-4xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-5xl md:text-6xl"
            >
                Run a paid 90-day test
                <br />
                on Titan&apos;s waste.
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 max-w-[48ch] text-base leading-relaxed text-[var(--mx-faint)]"
            >
                Low-risk because each step pays before the next. Gallium — same
                tool, same Titan–Teck relationship — is phase 2.
            </motion.p>

            <div className="mt-14 grid w-full max-w-3xl gap-6 text-left sm:grid-cols-3">
                {OFFER.map((step, i) => (
                    <motion.div
                        key={step.when}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-15% 0px" }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="border-t border-[var(--mx-ink)]/10 pt-5"
                    >
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mx-accent)]">
                            {step.when}
                        </span>
                        <p className="mt-2 text-sm font-medium text-[var(--mx-ink)]">
                            {step.what}
                        </p>
                        <p className="mt-1 text-xs text-[var(--mx-faint)]">{step.cost}</p>
                    </motion.div>
                ))}
            </div>

            <motion.a
                href="mailto:"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-14 inline-flex items-center gap-2 rounded-full bg-[var(--mx-ink)] px-7 py-3.5 text-sm font-medium text-[var(--mx-canvas)] transition-opacity hover:opacity-85"
            >
                Get in touch
            </motion.a>
        </section>
    );
}
