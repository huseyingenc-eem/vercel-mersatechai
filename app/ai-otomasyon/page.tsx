import { PageHero } from "@/components/shared/page-hero";
import { ValuePropositionSection } from "@components/sections/ai-otomasyon/value-proposition-section";
import { ServicesSection } from "@components/sections/ai-otomasyon/services-catalog";
import { DepartmentsGrid } from "@components/sections/ai-otomasyon/departments-grid";
import { RoadmapSection } from "@components/sections/ai-otomasyon/roadmap-section";
import { UseCasesSection } from "@components/sections/ai-otomasyon/use-cases-section";
import { CTASection } from "@components/sections/ai-otomasyon/cta-section";
import { Brain } from "lucide-react";

export default function AIPage() {
  const title = [
    { text: "AI" },
    { text: "Otomasyon" },
    { text: "ile" },
    { text: "Süreçlerinizi" },
    { text: "Hızlandırın," },
    { text: "Maliyetlerinizi" },
    { text: "Düşürün", className: "text-primary" },
  ];

  return (
    <main className="relative min-h-screen">
      <div className="relative">
        <PageHero
          badge={{
            icon: <Brain className="w-4 h-4 text-primary" />,
            text: "AI Otomasyon"
          }}
          title={title}
          description="Yapay zeka tabanlı otomasyon, tekrar eden görevleri ortadan kaldırır, insan hatasını azaltır ve iş süreçlerinizi ölçülebilir biçimde hızlandırır. API-tabanlı entegrasyon, AI Agent mimarisi ve veri odaklı yaklaşım ile işletmenizin tüm süreçlerini otonom hale getiriyoruz."
          primaryCta={{
            text: "Ücretsiz Danışmanlık",
            href: "/iletisim"
          }}
          secondaryCta={{
            text: "Demo Talebi",
            href: "#demo"
          }}
          backgroundVariant="ai"
        />
        <ValuePropositionSection />
        <ServicesSection />
        <DepartmentsGrid />
        <RoadmapSection />
        <UseCasesSection />
        <div id="demo">
          <CTASection />
        </div>
      </div>
    </main>
  );
}