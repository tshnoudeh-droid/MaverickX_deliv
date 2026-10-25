"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DotGrid from "@/components/dot-grid";

export default function AppendixLink() {
    return (
        <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-[var(--mx-canvas)] px-6 py-24 text-center sm:px-10">
            <DotGrid />
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]"
            >
                Appendix
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-5 max-w-xl font-serif italic text-3xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-4xl"
            >
                Every number, every source.
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 max-w-[48ch] text-sm leading-relaxed text-[var(--mx-faint)]"
            >
                The full key-numbers table, every risk we found, the siderophore
                economics, our open questions for Suman, and the complete source
                list — all in one place.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
            >
                <Link
                    href="/demo/tunnel/appendix"
                    className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--mx-ink)]/15 px-7 py-3.5 text-sm font-medium text-[var(--mx-ink)] transition-colors hover:bg-[var(--mx-canvas-dim)]"
                >
                    Open the appendix →
                </Link>
            </motion.div>
        </section>
    );
}
