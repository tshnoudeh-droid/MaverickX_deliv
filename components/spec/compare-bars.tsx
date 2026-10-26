import Reveal from "./reveal";

interface Bar {
    label: string;
    display: string;
    /** 0–100, bar width as a percentage of the widest bar */
    width: number;
    tone?: "ink" | "accent" | "faint";
}

/** Simple proportional bar comparison (B4 Section 4, B7). Pass pre-
 * computed `width` percentages rather than raw values so the component
 * stays dumb and every number stays visibly sourced by the caller. */
export default function CompareBars({ bars }: { bars: Bar[] }) {
    return (
        <div className="flex flex-col gap-5">
            {bars.map((bar, i) => (
                <Reveal key={bar.label} delay={i * 0.08}>
                    <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm text-[var(--mx-faint)]">{bar.label}</span>
                        <span className="font-serif tracking-tight text-lg font-medium text-[var(--mx-ink)]">
                            {bar.display}
                        </span>
                    </div>
                    <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-[var(--mx-canvas-dim)]">
                        <div
                            className={`h-full rounded-full ${
                                bar.tone === "accent"
                                    ? "bg-[var(--mx-accent)]"
                                    : bar.tone === "faint"
                                      ? "bg-[var(--mx-ink)]/30"
                                      : "bg-[var(--mx-ink)]"
                            }`}
                            style={{ width: `${Math.max(2, Math.min(100, bar.width))}%` }}
                        />
                    </div>
                </Reveal>
            ))}
        </div>
    );
}
