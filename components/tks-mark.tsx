"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Persistent bottom-left chrome: the TKS mark. Pulled from tks.world's
 * live nav (inline SVG, fill="currentColor") — recolored into separate
 * light/dark files since <img> can't inherit currentColor from the page.
 */
export default function TksMark() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="fixed bottom-4 left-4 z-50">
            {mounted ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={
                        resolvedTheme === "dark"
                            ? "/brand/tks-logo-dark.svg"
                            : "/brand/tks-logo-light.svg"
                    }
                    alt="TKS"
                    className="h-7 w-auto"
                />
            ) : (
                <div className="h-7 w-14" aria-hidden="true" />
            )}
        </div>
    );
}
