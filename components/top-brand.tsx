"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Persistent top-right chrome: the MaverickX wordmark + a light/dark
 * toggle. Logo files pulled from jobs.lever.co/maverickx — the dark
 * variant is derived (black ink recolored to white, blue kept as-is)
 * since only one text-color version was hosted there.
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
            {mounted ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={
                        resolvedTheme === "dark"
                            ? "/brand/maverickx-logo-dark.png"
                            : "/brand/maverickx-logo-light.png"
                    }
                    alt="MaverickX"
                    className="h-6 w-auto sm:h-7"
                />
            ) : (
                <div className="h-6 w-24 sm:h-7 sm:w-28" aria-hidden="true" />
            )}
        </div>
    );
}
