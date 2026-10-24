import { Play } from "lucide-react";

interface VideoPlaceholderProps {
    label: string;
    className?: string;
}

/**
 * Stand-in for a Higgsfield video clip. Swap the content for a real
 * <video> (or next/image poster + video on click) once assets land —
 * the aspect ratio and caption position are final.
 */
export default function VideoPlaceholder({ label, className = "" }: VideoPlaceholderProps) {
    return (
        <div
            className={`relative aspect-video w-full overflow-hidden rounded-xl border border-dashed border-[var(--mx-ink)]/20 bg-[var(--mx-canvas-dim)] ${className}`}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--mx-ink)]/10">
                    <Play className="h-5 w-5 fill-[var(--mx-ink)]/50 text-[var(--mx-ink)]/50" />
                </div>
            </div>
            <span className="absolute bottom-3 left-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--mx-faint)]">
                {label}
            </span>
        </div>
    );
}
