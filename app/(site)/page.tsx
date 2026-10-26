import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DotGrid from "@/components/dot-grid";
import Reveal from "@/components/spec/reveal";
import StatMoment from "@/components/spec/stat-moment";
import ProcessDiagram from "@/components/spec/process-diagram";
import CompareBars from "@/components/spec/compare-bars";

export default function Home() {
    return (
        <>
            {/* ───────────────────── Sieve 1 · attention ─────────────────────
                Section 1: Abstract hook. Full-screen, one statement, no link —
                the only job here is to make him keep scrolling. */}
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--mx-canvas)] px-6 text-center sm:px-10">
                <DotGrid />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--mx-accent)_0%,transparent_65%)] opacity-[0.08]" />
                <Reveal y={24} className="relative max-w-4xl">
                    <h1 className="font-serif tracking-tight text-4xl font-medium leading-[1.1] text-[var(--mx-ink)] sm:text-6xl md:text-7xl">
                        Almost none of the germanium in the world&apos;s
                        industrial waste gets recovered.
                    </h1>
                </Reveal>
                <Reveal delay={0.3} className="relative mt-16 flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[var(--mx-faint)]">
                    <span>Scroll</span>
                    <span className="h-8 w-px bg-gradient-to-b from-[var(--mx-accent)] to-transparent" />
                </Reveal>
            </section>

            {/* ───────────────────────── Sieve 1 ─────────────────────────
                Section 2: Why — is this worth his attention? */}
            <section className="relative bg-[var(--mx-canvas)] px-6 py-28 sm:px-10 sm:py-36">
                <DotGrid />
                <div className="relative mx-auto max-w-5xl">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]">
                            Why this, why now
                        </p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h2 className="mt-5 max-w-2xl font-serif tracking-tight text-3xl font-medium leading-[1.1] text-[var(--mx-ink)] sm:text-4xl md:text-5xl">
                            Supply is tightening right as demand keeps climbing.
                        </h2>
                    </Reveal>

                    <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
                        <StatMoment
                            value="<3%"
                            label="of germanium in zinc ores and fly ash is recovered — the bottleneck is economical extraction."
                            source="Penn State review"
                        />
                        <StatMoment
                            value="~60%"
                            label="of global germanium supply is controlled by China."
                            source="Skillings"
                            delay={0.08}
                        />
                        <StatMoment
                            value="Nov 27"
                            label="2026 — when China's suspension of its US export ban ends."
                            source="Evertiq"
                            delay={0.16}
                        />
                    </div>

                    <Reveal delay={0.2}>
                        <p className="mt-16 max-w-[60ch] text-sm leading-relaxed text-[var(--mx-faint)] sm:text-base">
                            Germanium underpins fiber optics and the hardware behind
                            AI — a reason it matters, not the headline.
                        </p>
                    </Reveal>

                    <Reveal delay={0.25}>
                        <Link
                            href="/problem"
                            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--mx-ink)] transition-colors hover:text-[var(--mx-accent)]"
                        >
                            See the full problem <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ───────────────────────── Sieve 2 ─────────────────────────
                Section 3: How — does it use what MaverickX already has? */}
            <section className="relative bg-[var(--mx-ink)] px-6 py-28 text-[var(--mx-canvas)] sm:px-10 sm:py-36">
                <DotGrid inverted />
                <div className="relative mx-auto max-w-5xl">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]">
                            The idea
                        </p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h2 className="mt-5 max-w-2xl font-serif tracking-tight text-3xl font-medium leading-[1.1] sm:text-4xl md:text-5xl">
                            Take the siderophore MaverickX already makes, and point
                            it at a new target.
                        </h2>
                    </Reveal>

                    <div className="mt-16">
                        <ProcessDiagram
                            steps={[
                                {
                                    label: "Industrial waste",
                                    detail: "Zinc refinery residue and coal fly ash — already dug up, already sitting there.",
                                },
                                {
                                    label: "Siderophore",
                                    detail: "MaverickX's metal-grabbing molecule, pointed at germanium instead of iron.",
                                },
                                {
                                    label: "Recovered germanium",
                                    detail: "A concentrate feeding existing recovery and refining capacity.",
                                },
                            ]}
                        />
                    </div>

                    <div className="mt-12 flex flex-wrap gap-3">
                        <span className="rounded-full border border-[var(--mx-canvas)]/20 px-4 py-2 text-xs font-medium">
                            Recovery from waste, not mining
                        </span>
                        <span className="rounded-full border border-[var(--mx-canvas)]/20 px-4 py-2 text-xs font-medium">
                            Uses your existing product
                        </span>
                    </div>

                    <Reveal delay={0.2}>
                        <Link
                            href="/solution"
                            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--mx-canvas)] transition-colors hover:text-[var(--mx-accent)]"
                        >
                            How it works <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ───────────────────────── Sieve 3 · teaser ─────────────────────────
                Section 4: What — do the economics work? Illustrative only;
                the real, final numbers live on /economics (spec B4 §4). */}
            <section className="relative bg-[var(--mx-canvas)] px-6 py-28 sm:px-10 sm:py-36">
                <DotGrid />
                <div className="relative mx-auto max-w-3xl">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]">
                            Why germanium
                        </p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h2 className="mt-5 font-serif tracking-tight text-3xl font-medium leading-[1.1] text-[var(--mx-ink)] sm:text-4xl md:text-5xl">
                            Why this target works where others didn&apos;t.
                        </h2>
                    </Reveal>

                    <div className="mt-14">
                        <CompareBars
                            bars={[
                                { label: "Value per kg, germanium", display: "[TODO]", width: 92, tone: "accent" },
                                { label: "Cost per kg, siderophore (crude broth)", display: "[TODO]", width: 28, tone: "faint" },
                            ]}
                        />
                        <p className="mt-4 text-xs text-[var(--mx-faint)]">
                            Illustrative — final numbers and every assumption are on
                            the Economics page.
                        </p>
                    </div>

                    <Reveal delay={0.2}>
                        <Link
                            href="/economics"
                            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--mx-ink)] transition-colors hover:text-[var(--mx-accent)]"
                        >
                            Run the numbers <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ───────────────────────── Sieve 4 · teaser ─────────────────────────
                Section 5: Proof sneak peek — is anyone really asking for this? */}
            <section className="relative bg-[var(--mx-canvas)] px-6 py-28 sm:px-10 sm:py-36">
                <DotGrid />
                <div className="relative mx-auto max-w-3xl">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]">
                            Proof
                        </p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h2 className="mt-5 font-serif tracking-tight text-3xl font-medium leading-[1.1] text-[var(--mx-ink)] sm:text-4xl md:text-5xl">
                            We didn&apos;t just think about it. We asked.
                        </h2>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="mt-12 rounded-2xl border border-[var(--mx-ink)]/10 bg-[var(--mx-canvas-dim)] p-6 sm:p-8">
                            <p className="text-lg text-[var(--mx-ink)]">
                                <span className="font-serif tracking-tight text-2xl font-medium">
                                    [TODO: X]
                                </span>{" "}
                                conversations with{" "}
                                <span className="font-serif tracking-tight text-2xl font-medium">
                                    [TODO: Y]
                                </span>{" "}
                                people and organizations.
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-[var(--mx-faint)]">
                                <span className="font-medium text-[var(--mx-ink)]">
                                    Blue Moon:
                                </span>{" "}
                                [TODO: exact wording of Blue Moon&apos;s interest in
                                testing — must be accurate].
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <Link
                            href="/evidence"
                            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--mx-ink)] transition-colors hover:text-[var(--mx-accent)]"
                        >
                            See who we talked to <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ───────────────────────── Sieve 5 · teaser ─────────────────────────
                Section 6: Low risk, low effort. */}
            <section className="relative bg-[var(--mx-canvas)] px-6 py-28 sm:px-10 sm:py-36">
                <DotGrid />
                <div className="relative mx-auto max-w-5xl">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]">
                            For your team
                        </p>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h2 className="mt-5 max-w-2xl font-serif tracking-tight text-3xl font-medium leading-[1.1] text-[var(--mx-ink)] sm:text-4xl md:text-5xl">
                            Built to be easy to say yes to.
                        </h2>
                    </Reveal>

                    <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
                        {[
                            { n: "01", title: "Uses your existing siderophore", body: "No new chemistry to develop — just a new target." },
                            { n: "02", title: "Recurring demand, not a one-off", body: "Waste streams keep producing. This isn't a single deal." },
                            { n: "03", title: "A small first test", body: "Days, not weeks or months — minimal work for your team." },
                        ].map((card, i) => (
                            <Reveal key={card.n} delay={i * 0.08} className="border-t border-[var(--mx-ink)]/10 pt-6">
                                <span className="font-mono text-sm text-[var(--mx-accent)]">
                                    {card.n}
                                </span>
                                <h3 className="mt-3 text-lg font-medium text-[var(--mx-ink)]">
                                    {card.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--mx-faint)]">
                                    {card.body}
                                </p>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.3}>
                        <Link
                            href="/plan"
                            className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-[var(--mx-ink)] transition-colors hover:text-[var(--mx-accent)]"
                        >
                            See the plan <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ───────────────────────── Sieve 6 ─────────────────────────
                Section 7: Closing ask. */}
            <section className="relative flex min-h-screen flex-col items-center justify-center bg-[var(--mx-ink)] px-6 py-28 text-center text-[var(--mx-canvas)] sm:px-10">
                <DotGrid inverted />
                <Reveal>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]">
                        The one thing we need to know
                    </p>
                </Reveal>
                <Reveal delay={0.05}>
                    <h2 className="relative mt-5 max-w-2xl font-serif tracking-tight text-3xl font-medium leading-[1.1] sm:text-5xl">
                        Does your siderophore already recover germanium?
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <ol className="relative mt-10 flex max-w-xl flex-col gap-3 text-left text-sm leading-relaxed text-[var(--mx-canvas)]/80 sm:text-base">
                        <li className="flex gap-3">
                            <span className="font-mono text-[var(--mx-accent)]">01</span>
                            How much germanium did the siderophore recover in tests,
                            and was it promising?
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
                    <Link
                        href="/plan"
                        className="mt-2 text-xs font-medium text-[var(--mx-canvas)]/70 underline-offset-4 hover:underline"
                    >
                        Start with the plan →
                    </Link>
                </Reveal>
            </section>
        </>
    );
}
