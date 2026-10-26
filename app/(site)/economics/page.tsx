import PageHeader from "@/components/spec/page-header";
import Reveal from "@/components/spec/reveal";
import CompareBars from "@/components/spec/compare-bars";
import SourceList from "@/components/spec/source-list";
import NextBlock from "@/components/spec/next-block";

export const metadata = { title: "The Economics — MaverickX" };

const ECONOMICS = [
    { case: "8 kg siderophore / kg Ge, single use", per: "8 kg", cost: "~$2,400", margin: "~$3,600" },
    { case: "19 kg siderophore / kg Ge, single use", per: "19 kg", cost: "~$5,800", margin: "~$200" },
    { case: "8 kg siderophore / kg Ge, reused 10×", per: "0.8 kg", cost: "~$240", margin: "~$5,760" },
    { case: "19 kg siderophore / kg Ge, reused 10×", per: "1.9 kg", cost: "~$580", margin: "~$5,420" },
];

export default function EconomicsPage() {
    return (
        <>
            <PageHeader
                eyebrow="Sieve 3 — Do the economics work?"
                title="High-value, low-volume — the opposite of what killed the last idea."
                subtitle="The siderophore is expensive per kilogram. Germanium is worth enough per kilogram that the math can still close."
            />

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            The core comparison
                        </h2>
                    </Reveal>
                    <div className="mt-10">
                        <CompareBars
                            bars={[
                                { label: "Germanium, Western spot (2026)", display: "~$6,000/kg", width: 100, tone: "accent" },
                                { label: "Siderophore, crude broth", display: "“a few hundred $/kg”", width: 10, tone: "faint" },
                            ]}
                        />
                    </div>
                    <Reveal delay={0.1}>
                        <p className="mt-6 max-w-[62ch] text-sm leading-relaxed text-[var(--mx-faint)]">
                            The gap is roughly 15–30×, before accounting for how
                            much siderophore it takes to pull one kilogram of
                            germanium out of a dilute waste stream — which is
                            exactly what the first test needs to measure.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            Why this works when iron didn&apos;t
                        </h2>
                    </Reveal>
                    <div className="mt-10 grid gap-8 sm:grid-cols-2">
                        <Reveal className="border-t border-[var(--mx-ink)]/10 pt-6">
                            <h3 className="text-lg font-medium text-[var(--mx-ink)]">
                                Iron (desalination pretreatment, ruled out)
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-[var(--mx-faint)]">
                                Target cost: ~$0.10–0.20/bbl. Siderophore math:
                                ~$55+/bbl for iron alone, single-use. Off by two
                                orders of magnitude, and cheap competitors already
                                exist.
                            </p>
                        </Reveal>
                        <Reveal delay={0.08} className="border-t border-[var(--mx-ink)]/10 pt-6">
                            <h3 className="text-lg font-medium text-[var(--mx-ink)]">
                                Germanium (this idea)
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-[var(--mx-faint)]">
                                High value per kg, low recovery volumes needed.
                                The same cost-per-kg siderophore that loses money on
                                iron can still work on a metal worth ~30–60× more.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            Break-even view
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-[var(--mx-faint)]">
                            Our estimate — assumes $300/kg siderophore, 1:1 binding,
                            100% capture. Real numbers from the first test will be
                            worse than this; every assumption is shown, not hidden.
                        </p>
                    </Reveal>
                    <div className="mt-8 overflow-x-auto">
                        <table className="w-full min-w-[560px] border-collapse text-sm">
                            <thead>
                                <tr className="border-b border-[var(--mx-ink)]/15 text-left text-xs uppercase tracking-wider text-[var(--mx-faint)]">
                                    <th className="py-3 pr-4 font-medium">Case (our estimate)</th>
                                    <th className="py-3 pr-4 font-medium">Siderophore / kg Ge</th>
                                    <th className="py-3 pr-4 font-medium">Cost</th>
                                    <th className="py-3 font-medium">Margin at $6,000/kg</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ECONOMICS.map((row) => (
                                    <tr key={row.case} className="border-b border-[var(--mx-ink)]/5">
                                        <td className="py-3 pr-4 text-[var(--mx-ink)]">{row.case}</td>
                                        <td className="py-3 pr-4 text-[var(--mx-faint)]">{row.per}</td>
                                        <td className="py-3 pr-4 text-[var(--mx-faint)]">{row.cost}</td>
                                        <td className="py-3 font-medium text-[var(--mx-ink)]">{row.margin}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Reveal delay={0.1}>
                        <p className="mt-4 text-sm leading-relaxed text-[var(--mx-faint)]">
                            Reused even a handful of times, the math works at almost
                            any realistic price. Single-use only clears a profit at
                            the lower siderophore-per-kg end. Reuse is the single
                            biggest unknown the first test should measure.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            Revenue model
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-[var(--mx-faint)]">
                            Recurring supply arrangements with waste-holders and
                            recovered-metal buyers — not a one-off deal. Waste
                            streams keep producing; the revenue keeps recurring.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            Who&apos;s in the chain
                        </h2>
                    </Reveal>
                    <div className="mt-8 grid gap-8 sm:grid-cols-3">
                        {[
                            { title: "Teck", body: "Trail, BC — already recovers germanium at scale." },
                            { title: "Korea Zinc", body: "Clarksville, TN rebuild — potential US recovery capacity." },
                            { title: "US DOE", body: "$75M coal-byproduct critical minerals program." },
                        ].map((item, i) => (
                            <Reveal key={item.title} delay={i * 0.08} className="border-t border-[var(--mx-ink)]/10 pt-6">
                                <h3 className="text-lg font-medium text-[var(--mx-ink)]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--mx-faint)]">
                                    {item.body}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal delay={0.25}>
                        <p className="mt-8 max-w-[62ch] text-sm leading-relaxed text-[var(--mx-faint)]">
                            AI companies (NVIDIA, Meta via Corning's fiber supply,
                            and others) are the demand story that makes germanium
                            valuable — not direct partners in this chain.
                        </p>
                    </Reveal>

                    <SourceList
                        sources={[
                            "Payne Institute: North American germanium supply chain (Western spot, 2026)",
                            "SMM: Germanium weekly review",
                            "Suman's email answers (siderophore crude-broth cost)",
                            "Our estimate: break-even table, assumptions stated above",
                            "Teck: Strategic Investment Agreement for Trail",
                            "US DOE: coal-byproduct critical minerals program",
                        ]}
                    />
                </div>
            </section>

            <NextBlock
                question="Does anyone actually want this?"
                href="/evidence"
                label="The Evidence"
            />
        </>
    );
}
