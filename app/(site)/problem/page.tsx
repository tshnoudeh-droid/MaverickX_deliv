import PageHeader from "@/components/spec/page-header";
import Reveal from "@/components/spec/reveal";
import StatMoment from "@/components/spec/stat-moment";
import SourceList from "@/components/spec/source-list";
import NextBlock from "@/components/spec/next-block";

export const metadata = { title: "The Problem — MaverickX" };

export default function ProblemPage() {
    return (
        <>
            <PageHeader
                eyebrow="Sieve 1 — Is this worth your attention?"
                title="Germanium is everywhere in modern hardware. Almost none of it comes from here."
                subtitle="Fiber optics, infrared optics, electronics, and the hardware behind AI all depend on a metal the US barely produces."
            />

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            Where it's used
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-[var(--mx-faint)]">
                            Germanium raises the refractive index of optical fiber —
                            it's what lets light signals travel efficiently over long
                            distances. It also shows up in infrared optics,
                            electronics, and increasingly in the hardware behind AI
                            data centers: fiber networking and photonic chips.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            Where it comes from
                        </h2>
                    </Reveal>
                    <div className="mt-10 grid gap-10 sm:grid-cols-2">
                        <StatMoment
                            value="~60%"
                            label="of global germanium supply is controlled by China."
                            source="Skillings"
                        />
                        <StatMoment
                            value="Nov 27"
                            label="2026 — when China's suspension of its US export ban ends."
                            source="Evertiq"
                            delay={0.08}
                        />
                    </div>

                    <Reveal delay={0.15}>
                        <div className="mt-12 rounded-2xl border border-[var(--mx-ink)]/10 bg-[var(--mx-canvas-dim)] p-6 sm:p-8">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mx-faint)]">
                                Timeline
                            </p>
                            <div className="relative mt-8 h-px bg-[var(--mx-ink)]/15">
                                <div className="absolute -top-2 left-0 flex flex-col items-start gap-2">
                                    <span className="h-3 w-3 rounded-full bg-[var(--mx-ink)]/40" />
                                    <span className="text-xs text-[var(--mx-faint)]">
                                        Today
                                    </span>
                                </div>
                                <div className="absolute -top-2 right-0 flex flex-col items-end gap-2 text-right">
                                    <span className="h-3 w-3 rounded-full bg-[var(--mx-accent)]" />
                                    <span className="text-xs font-medium text-[var(--mx-ink)]">
                                        Nov 27, 2026
                                        <br />
                                        <span className="font-normal text-[var(--mx-faint)]">
                                            export-ban pause ends
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            Where it's lost
                        </h2>
                    </Reveal>
                    <div className="mt-10">
                        <StatMoment
                            value="<3%"
                            label="of the germanium in zinc ores and fly ash is actually recovered."
                            source="Penn State review"
                        />
                    </div>
                    <Reveal delay={0.1}>
                        <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-[var(--mx-faint)]">
                            Germanium is never extracted on its own — it's a trace
                            byproduct of zinc refining (and, separately, coal fly
                            ash). The bottleneck isn't geology. It's economics:
                            capturing a trace metal out of a dilute waste stream
                            cheaply enough to be worth doing.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            A policy tailwind
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-[var(--mx-faint)]">
                            The US Department of Energy has a{" "}
                            <span className="font-medium text-[var(--mx-ink)]">
                                $75M coal-byproduct critical minerals program
                            </span>{" "}
                            — recovery from existing industrial waste streams is
                            already a funding priority, not a speculative bet.
                        </p>
                    </Reveal>

                    <SourceList
                        sources={[
                            "Skillings: Gallium and germanium 12 months after export controls",
                            "Evertiq: China suspends gallium and germanium ban to Nov 27, 2026",
                            "Penn State: Germanium review, <3% recovered",
                            "US DOE: coal-byproduct critical minerals program ($75M)",
                        ]}
                    />
                </div>
            </section>

            <NextBlock
                question="So how do we recover it?"
                href="/solution"
                label="The Solution"
            />
        </>
    );
}
