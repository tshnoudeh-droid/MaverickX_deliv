"use client";

import { motion } from "framer-motion";

export default function ClosingCta() {
    return (
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-[var(--mx-canvas)] px-6 py-28 text-center sm:px-10">
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]"
            >
                05 — Let&apos;s Talk
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-5 max-w-2xl font-serif italic text-4xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-5xl md:text-6xl"
            >
                Ready to go deeper?
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 max-w-[48ch] text-base leading-relaxed text-[var(--mx-faint)]"
            >
                This is the deliverable, start to finish — placeholder closing line,
                swap for the real ask.
            </motion.p>
            <motion.a
                href="#"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--mx-ink)] px-7 py-3.5 text-sm font-medium text-[var(--mx-canvas)] transition-opacity hover:opacity-85"
            >
                Get in touch
            </motion.a>
        </section>
    );
}
