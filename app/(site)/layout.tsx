import { Schibsted_Grotesk, Public_Sans, JetBrains_Mono } from "next/font/google";
import LenisProvider from "@/components/lenis-provider";
import TopNav from "@/components/spec/top-nav";
import TksMark from "@/components/tks-mark";
import TeamFooter from "@/components/spec/team-footer";

// The pitch site's own type system (from the original spec doc), scoped
// to this route group only — populates the same --font-sans/--font-serif
// /--font-mono slots the MaverickX brand site uses, but shadowed locally
// so /demo/tunnel keeps Inter/Inter Tight untouched.
const schibstedGrotesk = Schibsted_Grotesk({
    variable: "--font-serif",
    subsets: ["latin"],
    // 500 included because the site's headings use Tailwind's
    // font-medium — next/font only generates @font-face entries for
    // exactly the weights listed, so a requested weight not loaded
    // here falls back to a system font instead of synthesizing bold.
    weight: ["500", "600", "700", "800"],
});

const publicSans = Public_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
    // 700 included for TopNav's font-bold wordmark.
    weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400", "500"],
});

/** Shared chrome for the real pitch site: homepage + 5 deep pages
 * (SPEC.md's site map). A route group — (site) doesn't appear in the
 * URL. /demo/tunnel sits outside this group and keeps its own chrome,
 * fonts, and the MaverickX-brand token values (see .spec-theme in
 * globals.css for how this scoping works). */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={`spec-theme ${schibstedGrotesk.variable} ${publicSans.variable} ${jetbrainsMono.variable} font-sans`}
        >
            <LenisProvider>
                <TopNav />
                <TksMark />
                <main className="bg-[var(--mx-canvas)]">{children}</main>
                <TeamFooter />
            </LenisProvider>
        </div>
    );
}
