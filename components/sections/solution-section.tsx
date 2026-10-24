"use client";

import { motion } from "framer-motion";

const CHAIN = [
    { n: "01", title: "Titan", body: "Dilute germanium leach liquid from zinc tailings." },
    { n: "02", title: "MaverickX", body: "Siderophore selectively captures germanium, no harsh chemicals." },
    { n: "03", title: "Teck Trail", body: "Upgraded concentrate feeds Teck's C$400M Trail expansion." },
    { n: "04", title: "Corning + NVIDIA", body: "Fiber and photonics for AI data centers." },
];

export default function SolutionSection() {
    return (
        <section className="relative bg-[var(--mx-ink)] px-6 py-28 text-[var(--mx-canvas)] sm:px-10 sm:py-36">
            <div className="mx-auto max-w-5xl">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]"
                >
                    06 — Our Solution
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="mt-5 max-w-xl font-serif italic text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl"
                >
                    MaverickX&apos;s siderophore grabs
                    <br />
                    germanium. No harsh chemicals.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-6 max-w-[58ch] text-base leading-relaxed text-[var(--mx-canvas)]/70 sm:text-lg"
                >
                    Siderophores bind germanium selectively even at very low
                    concentrations <span className="text-xs">(Helmholtz GaLIophore / ERA-LEARN)</span>.
                    MaverickX doesn&apos;t replace Teck&apos;s refinery — it upgrades Titan&apos;s
                    dilute liquid into a concentrate Trail can take.
                </motion.p>

                <p className="mt-16 font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]">
                    07 — The Chain
                </p>
                <div className="mt-6 grid gap-10 sm:grid-cols-4 sm:gap-8">
                    {CHAIN.map((link, i) => (
                        <motion.div
                            key={link.n}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-15% 0px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="border-t border-[var(--mx-canvas)]/15 pt-6"
                        >
                            <span className="font-mono text-sm text-[var(--mx-accent)]">
                                {link.n}
                            </span>
                            <h3 className="mt-3 text-lg font-medium">{link.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-[var(--mx-canvas)]/65">
                                {link.body}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 max-w-[52ch] text-sm leading-relaxed text-[var(--mx-canvas)]/60"
                >
                    Honest comparison: by mass, siderophore use (8–19 g per g
                    germanium, single use — depends which siderophore) is similar to
                    tannin (8–10 g). MaverickX has to win on selectivity and reuse,
                    not price per kg.
                </motion.p>
            </div>
        </section>
    );
}
