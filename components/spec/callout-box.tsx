import { CircleHelp } from "lucide-react";
import Reveal from "./reveal";

/** "What we don't know yet" box (A5/A6/B6/B11) — the honesty
 * mechanism. Never skip this where the spec calls for it: it's what
 * builds trust with a reader who "expects most ideas to fail." */
export default function CalloutBox({
    title = "What we don't know yet",
    items,
}: {
    title?: string;
    items: string[];
}) {
    return (
        <Reveal>
            <div className="rounded-2xl border border-dashed border-[var(--mx-ink)]/20 bg-[var(--mx-canvas-dim)] p-6 sm:p-8">
                <div className="flex items-center gap-2">
                    <CircleHelp className="h-4 w-4 text-[var(--mx-accent)]" />
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mx-accent)]">
                        {title}
                    </p>
                </div>
                <ul className="mt-4 space-y-2.5">
                    {items.map((item) => (
                        <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-[var(--mx-ink)]"
                        >
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--mx-faint)]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </Reveal>
    );
}
