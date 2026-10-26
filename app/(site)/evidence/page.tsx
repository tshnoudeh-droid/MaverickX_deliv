import PageHeader from "@/components/spec/page-header";
import Reveal from "@/components/spec/reveal";
import CalloutBox from "@/components/spec/callout-box";
import NextBlock from "@/components/spec/next-block";

export const metadata = { title: "The Evidence — MaverickX" };

export default function EvidencePage() {
    return (
        <>
            <PageHeader
                eyebrow="Sieve 4 — Is anyone really asking for this?"
                title="We talked to people before we built a pitch deck."
                subtitle="This page needs the team's actual conversation data before submission — nothing here is invented."
            />

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            The numbers
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <div className="mt-8 rounded-2xl border border-dashed border-[var(--mx-ink)]/20 bg-[var(--mx-canvas-dim)] p-6 sm:p-8">
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
                                [TODO: breakdown by type — industry, academic,
                                government, etc.]
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            Blue Moon
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <div className="mt-8 rounded-2xl border border-dashed border-[var(--mx-ink)]/20 bg-[var(--mx-canvas-dim)] p-6 sm:p-8">
                            <p className="text-sm leading-relaxed text-[var(--mx-ink)]">
                                [TODO: exact wording of Blue Moon&apos;s interest in
                                testing — must be accurate, with date and context]
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            Other signals
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-[var(--mx-faint)]">
                            [TODO: quotes, emails, or notes from other conversations
                            — only include what the team can stand behind]
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <h2 className="font-serif tracking-tight text-2xl font-medium text-[var(--mx-ink)] sm:text-3xl">
                            What these conversations told us
                        </h2>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-[var(--mx-faint)]">
                            [TODO: 3–5 short takeaways, drawn from the actual
                            conversations above]
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="relative px-6 py-16 sm:px-10">
                <div className="mx-auto max-w-4xl">
                    <CalloutBox
                        title="What we still need"
                        items={[
                            "Final conversation count and organization breakdown.",
                            "Confirmed, accurate wording for Blue Moon's interest.",
                            "Any other signal we can verifiably stand behind.",
                        ]}
                    />
                </div>
            </section>

            <NextBlock
                question="What would it take to start?"
                href="/plan"
                label="The Plan"
            />
        </>
    );
}
