import PageHeader from "@/components/spec/page-header";
import Reveal from "@/components/spec/reveal";
import ProgressDots from "@/components/spec/progress-dots";
import DotGrid from "@/components/dot-grid";

export const metadata = { title: "The Plan — MaverickX" };

const RISKS = [
    {
        risk: "We don't know if the siderophore recovers germanium well",
        mitigation: "That's exactly what the first test measures — we're asking, not claiming.",
    },
    {
        risk: "Siderophore isn't confirmed reusable",
        mitigation: "Single-use economics still work in the higher-value cases; reuse is a stretch goal the test can also check.",
    },
    {
        risk: "We're only proposing one step of a longer chain",
        mitigation: "Capture only — feeding into Teck's or Korea Zinc's existing refining capacity, not a new end-to-end process.",
    },
    {
        risk: "A trace-metal pitch can look speculative",
        mitigation: "We show our reasoning, including the two ideas we already ruled out on the numbers.",
    },
    {
        risk: "Long test cycles are a dealbreaker for your team",
        mitigation: "First test scoped to days, not weeks or months.",
    },
];

export default function PlanPage() {
    return (
        <>
            <PageHeader
                eyebrow="Sieves 5–6 — Low risk, and what happens first"
                title="A small first test, scoped to your team's bandwidth."
                subtitle="Every step pays for itself before the next one starts."
            />

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            The first test
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                            <div className="border-t border-[var(--mx-ink)]/10 pt-5">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mx-faint)]">
                                    Sample
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--mx-ink)]">
                                    [TODO: finalize — a germanium-bearing waste
                                    sample, zinc refinery residue or fly ash]
                                </p>
                            </div>
                            <div className="border-t border-[var(--mx-ink)]/10 pt-5">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mx-faint)]">
                                    Measurement
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--mx-ink)]">
                                    [TODO: finalize — germanium recovery rate from
                                    siderophore treatment vs. untreated control]
                                </p>
                            </div>
                            <div className="border-t border-[var(--mx-ink)]/10 pt-5">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mx-faint)]">
                                    Timeline
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--mx-ink)]">
                                    Days, not weeks or months.
                                </p>
                            </div>
                            <div className="border-t border-[var(--mx-ink)]/10 pt-5">
                                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mx-faint)]">
                                    Who does what
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--mx-ink)]">
                                    [TODO: finalize — split of lab work between
                                    MaverickX and the team]
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            What we need from MaverickX
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--mx-ink)]">
                            <li className="flex gap-3">
                                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--mx-faint)]" />
                                Access to the siderophore in crude-broth form, at
                                small test scale.
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--mx-faint)]" />
                                Whatever data exists from the germanium-bearing
                                liquid tests already run, to compare against.
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--mx-faint)]" />
                                A few hours of a research assistant&apos;s time —
                                not a dedicated project.
                            </li>
                        </ul>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <DotGrid />
                <div className="relative mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            Risks, and how we reduce them
                        </h2>
                    </Reveal>
                    <div className="mt-8 divide-y divide-[var(--mx-ink)]/10">
                        {RISKS.map((item, i) => (
                            <Reveal key={item.risk} delay={i * 0.05} className="py-5">
                                <p className="text-sm font-medium text-[var(--mx-ink)]">
                                    {item.risk}
                                </p>
                                <p className="mt-1 text-sm leading-relaxed text-[var(--mx-accent)]">
                                    → {item.mitigation}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            Path to recurring revenue
                        </h2>
                    </Reveal>
                    <div className="mt-8 grid gap-8 sm:grid-cols-3">
                        {[
                            { n: "01", title: "Test", body: "Days-scale lab test on a waste sample." },
                            { n: "02", title: "Pilot", body: "On-site pilot with a waste-holder, shared cost." },
                            { n: "03", title: "Supply agreement", body: "Recurring siderophore supply, not a one-off." },
                        ].map((step, i) => (
                            <Reveal key={step.n} delay={i * 0.08} className="border-t border-[var(--mx-ink)]/10 pt-6">
                                <span className="font-mono text-sm text-[var(--mx-accent)]">
                                    {step.n}
                                </span>
                                <h3 className="mt-3 text-lg font-medium text-[var(--mx-ink)]">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--mx-faint)]">
                                    {step.body}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <div className="rounded-2xl border border-[var(--mx-ink)]/10 bg-[var(--mx-canvas-dim)] p-6 sm:p-8">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mx-faint)]">
                                Backup direction
                            </p>
                            <h3 className="mt-3 text-lg font-medium text-[var(--mx-ink)]">
                                Keeping saltwater disposal wells open
                            </h3>
                            <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-[var(--mx-faint)]">
                                In MaverickX&apos;s existing oil and gas lane,
                                already on the roadmap, and uses the existing
                                product — a lower-risk fallback if germanium doesn&apos;t
                                pan out.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Closing ask — the terminus of the sieve chain, not a NextBlock */}
            <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-[var(--mx-ink)] px-6 py-28 text-center text-[var(--mx-canvas)] sm:px-10">
                <DotGrid inverted />
                <Reveal>
                    <ProgressDots />
                </Reveal>
                <Reveal delay={0.05}>
                    <h2 className="relative mt-8 max-w-2xl font-serif tracking-tight text-3xl font-medium leading-[1.1] sm:text-5xl">
                        Two questions. That&apos;s the ask.
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <ol className="relative mt-10 flex max-w-xl flex-col gap-3 text-left text-sm leading-relaxed text-[var(--mx-canvas)]/80 sm:text-base">
                        <li className="flex gap-3">
                            <span className="font-mono text-[var(--mx-accent)]">01</span>
                            How much germanium did the siderophore recover in
                            tests, and was it promising?
                        </li>
                        <li className="flex gap-3">
                            <span className="font-mono text-[var(--mx-accent)]">02</span>
                            Would germanium/gallium recovery from zinc residue or
                            fly ash be a direction MaverickX would consider?
                        </li>
                    </ol>
                </Reveal>
                <Reveal delay={0.2} className="relative mt-12 flex flex-col items-center gap-4">
                    <a
                        href="mailto:[TODO: team email]"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--mx-canvas)] px-7 py-3.5 text-sm font-medium text-[var(--mx-ink)] transition-opacity hover:opacity-90"
                    >
                        Email us
                    </a>
                    <span className="font-mono text-xs text-[var(--mx-canvas)]/60">
                        [TODO: team email]
                    </span>
                </Reveal>
            </section>
        </>
    );
}
