import LenisProvider from "@/components/lenis-provider";
import TopNav from "@/components/spec/top-nav";
import TksMark from "@/components/tks-mark";
import TeamFooter from "@/components/spec/team-footer";

/** Shared chrome for the real pitch site: homepage + 5 deep pages
 * (SPEC.md's site map). A route group — (site) doesn't appear in the
 * URL. /demo/tunnel sits outside this group and keeps its own chrome. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <LenisProvider>
            <TopNav />
            <TksMark />
            <main className="bg-[var(--mx-canvas)]">{children}</main>
            <TeamFooter />
        </LenisProvider>
    );
}
