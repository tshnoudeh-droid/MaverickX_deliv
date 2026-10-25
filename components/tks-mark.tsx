/**
 * Persistent bottom-left chrome: the TKS mark. Text badge standing in
 * for the real TKS logo file — swap the span below for an <img
 * src="/brand/tks-logo.png" /> once that asset is saved into
 * public/brand/.
 */
export default function TksMark() {
    return (
        <div className="fixed bottom-4 left-4 z-50">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--mx-ink)]/10 bg-[var(--mx-canvas)]/80 text-xs font-bold italic text-[var(--mx-ink)] backdrop-blur">
                TKS
            </span>
        </div>
    );
}
