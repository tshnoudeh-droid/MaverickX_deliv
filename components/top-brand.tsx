"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Persistent top-right chrome: the MaverickX wordmark + a light/dark
 * toggle. Text-only mark for now — swap in the real logomark (the
 * connected-dots icon from maverickx's site) once that asset exists.
 */
export default function TopBrand() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="fixed right-4 top-4 z-50 flex items-center gap-3">
            <button
                type="button"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                aria-label="Toggle light/dark mode"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--mx-ink)]/10 bg-[var(--mx-canvas)]/80 text-[var(--mx-ink)] backdrop-blur transition-colors hover:bg-[var(--mx-canvas-dim)]"
            >
                {mounted && resolvedTheme === "dark" ? (
                    <Sun className="h-3.5 w-3.5" />
                ) : (
                    <Moon className="h-3.5 w-3.5" />
                )}
            </button>
            <span className="rounded-full border border-[var(--mx-ink)]/10 bg-[var(--mx-canvas)]/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--mx-ink)] backdrop-blur">
                Maverick<span className="font-normal">X</span>
            </span>
        </div>
    );
}
