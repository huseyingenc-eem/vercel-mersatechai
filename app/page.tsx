import { HeroSection } from "@components/sections/home/hero-section";
import { ServicesSection } from "@components/sections/home/services-section";
import { UseCasesPreview } from "@components/sections/home/use-cases-preview";
import { FeaturesSection } from "@components/sections/home/features-section";
import { IntegrationsSection } from "@components/sections/home/integrations-section";
import { CTASection } from "@components/sections/home/cta-section";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <UseCasesPreview />
            <FeaturesSection />
            <IntegrationsSection />
            <CTASection />
        </>
    );
}
