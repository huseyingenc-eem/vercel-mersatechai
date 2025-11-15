import { PageHero } from "@/components/shared/page-hero";
import { ValuePropositionSection } from "@components/sections/ai-otomasyon/value-proposition-section";
import { ServicesSection } from "@components/sections/ai-otomasyon/services-catalog";
import { DepartmentsGrid } from "@components/sections/ai-otomasyon/departments-grid";
import { RoadmapSection } from "@components/sections/ai-otomasyon/roadmap-section";
import { UseCasesSection } from "@components/sections/ai-otomasyon/use-cases-section";
import { CTASection } from "@components/sections/ai-otomasyon/cta-section";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Brain } from "lucide-react";

export default function AIPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background Beams - Full Page */}
      <BackgroundBeams className="fixed inset-0 z-0" />

      {/* Content - Above Beams */}
      <div className="relative z-10">
        {/* 1) HERO SECTION */}
        <PageHero
        badge={{
          icon: <Brain className="w-4 h-4 text-blue-500 dark:text-blue-400" />,
          text: "AI Otomasyon"
        }}
        title={
          <>
            <span className="text-foreground">AI Otomasyon ile </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Süreçlerinizi Hızlandırın
            </span>
            <span className="text-foreground">, Maliyetlerinizi Düşürün</span>
          </>
        }
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

      {/* 2) NEDEN AI OTOMASYON? (VALUE PROPOSITION) */}
      <ValuePropositionSection />

      {/* 3) AI OTOMASYON HİZMETLERİ */}
      <ServicesSection />

      {/* 3.5) DEPARTMANLAR İÇİN AI ÇÖZÜMLERİ */}
      <DepartmentsGrid />

      {/* 4) YAPAY ZEKA DÖNÜŞÜM YOL HARİTASI */}
      <RoadmapSection />

      {/* 5) USE CASE SENARYOLARI */}
      <UseCasesSection />

      {/* 6) CTA - DANIŞMANLIK & DEMO TALEBİ */}
      <div id="demo">
        <CTASection />
      </div>
      </div>
    </main>
  );
}

