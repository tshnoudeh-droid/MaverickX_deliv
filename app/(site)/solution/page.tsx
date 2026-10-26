import PageHeader from "@/components/spec/page-header";
import Reveal from "@/components/spec/reveal";
import ProcessDiagram from "@/components/spec/process-diagram";
import CalloutBox from "@/components/spec/callout-box";
import NextBlock from "@/components/spec/next-block";

export const metadata = { title: "The Solution — MaverickX" };

const RULED_OUT = [
    {
        title: "Data center biofilm cleaning",
        why: "The industry is already moving to PG25 glycol, enzyme biofilm cleaners already exist, and it isn't MaverickX's enzyme.",
    },
    {
        title: "Produced-water pretreatment for desalination",
        why: "Target is about $0.10–0.20/bbl. The siderophore math runs ~$55+/bbl for iron alone (single-use). Cheap competitors already exist (ZwitterCo ~$0.11/bbl, TETRA's patented pretreatment).",
    },
];

export default function SolutionPage() {
    return (
        <>
            <PageHeader
                eyebrow="Sieve 2 — Does it use what you already have?"
                title="Point your existing siderophore at a new target."
                subtitle="No new chemistry. No new biology. The same metal-grabbing molecule, applied to a problem it hasn't been tried on yet."
            />

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            The idea
                        </h2>
                    </Reveal>
                    <div className="mt-10">
                        <ProcessDiagram
                            steps={[
                                {
                                    label: "Industrial waste",
                                    detail: "Zinc refinery residue and coal fly ash — germanium-bearing, already generated.",
                                },
                                {
                                    label: "Siderophore",
                                    detail: "MaverickX's existing metal-grabbing molecule, applied as a crude broth.",
                                },
                                {
                                    label: "Recovered germanium",
                                    detail: "A concentrate, upgraded from waste that currently goes unrecovered.",
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            What a siderophore is
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-[var(--mx-faint)]">
                            A siderophore is a small molecule that binds metal ions
                            with high affinity and selectivity — nature's own metal-
                            chelation chemistry. MaverickX's siderophore was
                            developed to dissolve iron sulfide; the same binding
                            chemistry is the reason it's a candidate for other
                            metals, germanium included.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            What MaverickX has already done
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-[var(--mx-faint)]">
                            Suman confirmed MaverickX has already tested the
                            siderophore on germanium-bearing liquids — zinc refinery
                            residue and fly ash.{" "}
                            <span className="font-medium text-[var(--mx-ink)]">
                                The results of those tests are unknown to us.
                            </span>{" "}
                            We're not claiming it works. We're asking whether it
                            does.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            What we ruled out
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-[var(--mx-faint)]">
                            We looked at two other directions first. Both failed on
                            the numbers, not on effort.
                        </p>
                    </Reveal>
                    <div className="mt-10 grid gap-8 sm:grid-cols-2">
                        {RULED_OUT.map((item, i) => (
                            <Reveal
                                key={item.title}
                                delay={i * 0.08}
                                className="border-t border-[var(--mx-ink)]/10 pt-6"
                            >
                                <h3 className="text-lg font-medium text-[var(--mx-ink)]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--mx-faint)]">
                                    {item.why}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <CalloutBox
                        items={[
                            "Whether the siderophore binds germanium with useful selectivity.",
                            "Recovery efficiency on a real, dilute waste stream.",
                            "Whether the siderophore can be reused, or only works single-use.",
                        ]}
                    />
                </div>
            </section>

            <NextBlock
                question="Does it make money?"
                href="/economics"
                label="The Economics"
            />
        </>
    );
}
