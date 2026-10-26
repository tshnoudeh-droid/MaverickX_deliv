/** Endnote-style source list closing most deep-page sections (B11:
 * every number has a source link or is labelled "assumption"). */
export default function SourceList({ sources }: { sources: string[] }) {
    return (
        <div className="mt-10 border-t border-[var(--mx-ink)]/10 pt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--mx-faint)]">
                Sources
            </p>
            <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-[var(--mx-faint)]">
                {sources.map((s) => (
                    <li key={s}>{s}</li>
                ))}
            </ul>
        </div>
    );
}
