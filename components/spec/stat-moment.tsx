import Reveal from "./reveal";

/** Big number + label, reveals on scroll. Used for the homepage's
 * three Why stats and reused on deep pages. `source` renders small,
 * satisfying B11 ("every number has a source link or is labelled
 * assumption"). */
export default function StatMoment({
    value,
    label,
    source,
    delay = 0,
}: {
    value: string;
    label: string;
    source: string;
    delay?: number;
}) {
    return (
        <Reveal delay={delay} className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <span className="font-serif tracking-tight text-6xl font-medium text-[var(--mx-ink)] sm:text-7xl">
                {value}
            </span>
            <span className="mt-3 max-w-[28ch] text-sm leading-relaxed text-[var(--mx-faint)] sm:text-base">
                {label}
            </span>
            <span className="mt-2 text-xs text-[var(--mx-faint)]/70">{source}</span>
        </Reveal>
    );
}
