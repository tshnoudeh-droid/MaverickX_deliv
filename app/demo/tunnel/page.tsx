import PerspectiveTunnelHero from "@/components/ui/perspective-tunnel-hero";
import ProblemSection from "@/components/sections/problem-section";
import HiddenSupplySection from "@/components/sections/hidden-supply-section";
import BottleneckSection from "@/components/sections/bottleneck-section";
import HorizontalGallery from "@/components/sections/horizontal-gallery";
import SolutionSection from "@/components/sections/solution-section";
import ReasoningSection from "@/components/sections/reasoning-section";
import RisksSection from "@/components/sections/risks-section";
import TeamSection from "@/components/sections/team-section";
import ClosingCta from "@/components/sections/closing-cta";
import BackLink from "@/components/back-link";
import LenisProvider from "@/components/lenis-provider";

export default function TunnelDemoPage() {
    return (
        <LenisProvider>
            <BackLink />
            <main className="bg-[var(--mx-canvas)]">
                <PerspectiveTunnelHero />
                <ProblemSection />
                <HiddenSupplySection />
                <BottleneckSection />
                <HorizontalGallery />
                <SolutionSection />
                <ReasoningSection />
                <RisksSection />
                <TeamSection />
                <ClosingCta />
            </main>
        </LenisProvider>
    );
}
