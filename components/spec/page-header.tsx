import Reveal from "./reveal";
import DotGrid from "@/components/dot-grid";

/** Consistent intro block for each deep page: eyebrow (which sieve),
 * big heading, short subtext. */
export default function PageHeader({
    eyebrow,
    title,
    subtitle,
}: {
    eyebrow: string;
    title: string;
    subtitle?: string;
}) {
    return (
        <section className="relative px-6 pb-16 pt-36 sm:px-10 sm:pt-44">
            <DotGrid />
            <div className="relative mx-auto max-w-4xl">
                <Reveal>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--mx-accent)]">
                        {eyebrow}
                    </p>
                </Reveal>
                <Reveal delay={0.05}>
                    <h1 className="mt-5 font-serif tracking-tight text-4xl font-medium leading-[1.05] text-[var(--mx-ink)] sm:text-5xl md:text-6xl">
                        {title}
                    </h1>
                </Reveal>
                {subtitle ? (
                    <Reveal delay={0.1}>
                        <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-[var(--mx-faint)] sm:text-lg">
                            {subtitle}
                        </p>
                    </Reveal>
                ) : null}
            </div>
        </section>
    );
}
