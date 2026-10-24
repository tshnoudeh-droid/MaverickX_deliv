import PerspectiveTunnelHero from "@/components/ui/perspective-tunnel-hero";
import ProblemSection from "@/components/sections/problem-section";
import ResearchSection from "@/components/sections/research-section";
import HorizontalGallery from "@/components/sections/horizontal-gallery";
import SolutionSection from "@/components/sections/solution-section";
import TeamSection from "@/components/sections/team-section";
import ClosingCta from "@/components/sections/closing-cta";
import BackLink from "@/components/back-link";
import LenisProvider from "@/components/lenis-provider";
import EnergyGate from "@/components/energy-gate";

export default function TunnelDemoPage() {
    return (
        <LenisProvider>
            <EnergyGate />
            <BackLink />
            <main className="bg-[var(--mx-canvas)]">
                <PerspectiveTunnelHero />
                <ProblemSection />
                <ResearchSection />
                <HorizontalGallery />
                <SolutionSection />
                <TeamSection />
                <ClosingCta />
            </main>
        </LenisProvider>
    );
}
