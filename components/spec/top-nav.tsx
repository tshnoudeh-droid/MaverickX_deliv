"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const LINKS = [
    { href: "/problem", label: "Problem" },
    { href: "/solution", label: "Solution" },
    { href: "/economics", label: "Economics" },
    { href: "/evidence", label: "Evidence" },
    { href: "/plan", label: "Plan" },
];

/** Slim persistent top bar per B2: wordmark left, sieve nav right,
 * current page highlighted. The light/dark toggle lives here too. */
export default function TopNav() {
    const pathname = usePathname();
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--mx-ink)]/10 bg-[var(--mx-canvas)]/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-10">
                <Link
                    href="/"
                    className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--mx-ink)]"
                >
                    Maverick<span className="font-normal">X</span>
                </Link>

                <nav className="hidden items-center gap-6 sm:flex">
                    {LINKS.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-xs font-medium uppercase tracking-wider transition-colors ${
                                    active
                                        ? "text-[var(--mx-accent)]"
                                        : "text-[var(--mx-faint)] hover:text-[var(--mx-ink)]"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <button
                    type="button"
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                    aria-label="Toggle light/dark mode"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--mx-ink)]/10 text-[var(--mx-ink)] transition-colors hover:bg-[var(--mx-canvas-dim)]"
                >
                    {mounted && resolvedTheme === "dark" ? (
                        <Sun className="h-3.5 w-3.5" />
                    ) : (
                        <Moon className="h-3.5 w-3.5" />
                    )}
                </button>
            </div>

            {/* mobile nav: wraps below the bar on small screens */}
            <nav className="flex items-center gap-4 overflow-x-auto border-t border-[var(--mx-ink)]/5 px-6 py-2 sm:hidden">
                {LINKS.map((link) => {
                    const active = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`shrink-0 text-xs font-medium uppercase tracking-wider transition-colors ${
                                active
                                    ? "text-[var(--mx-accent)]"
                                    : "text-[var(--mx-faint)]"
                            }`}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
