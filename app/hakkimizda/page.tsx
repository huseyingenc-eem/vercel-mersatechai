"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AboutStorySection } from "@components/sections/hakkimizda/about-story-section";
import { WhyMersaSection } from "@components/sections/hakkimizda/why-mersa-section";
import { CoreValuesSection } from "@components/sections/hakkimizda/core-values-section";
import { TrustSection } from "@components/sections/hakkimizda/trust-section";
import { TrustedBySection } from "@components/sections/hakkimizda/trusted-by-section";
import { HakkimizdaCTASection } from "@components/sections/hakkimizda/cta-section";

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Background kontrolü PageHero'da */}
      <PageHero
        badge={{
          icon: <Sparkles className="w-4 h-4" />,
          text: "MERSA Technology"
        }}
        title="Hakkımızda"
        description="Yapay zeka teknolojileri ile işletmelerin müşteri iletişimini dönüştürüyoruz"
        backgroundVariant="gradient"
      />

      {/* Biz Kimiz & Bizim Hikayemiz */}
      <AboutStorySection />

      {/* Neden MERSA? */}
      <WhyMersaSection />

      {/* Teknoloji & İş Ortakları (Infinite Scroll) */}
      <TrustedBySection />

      {/* Core Values (Merak, Sadelik, Verimlilik) */}
      <CoreValuesSection />

      {/* Neden İşletmeler Bize Güveniyor? */}
      <TrustSection />

      {/* CTA Section */}
      <HakkimizdaCTASection />
    </div>
  );
}

