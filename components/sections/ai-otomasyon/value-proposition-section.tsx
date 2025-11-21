"use client";

import React from "react";
import { Zap, RefreshCw, Link2, TrendingUp } from "lucide-react";
import { Card } from "@components/ui/core/card";
import { SectionHeader } from "@components/shared";

const values = [
  {
    icon: Zap,
    title: "%70'e kadar zamandan tasarruf",
    description: "Rutin görevleri AI Agent'lara devrederek ekiplerinizi stratejik işlere odaklayın.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: RefreshCw,
    title: "Hatasız Doğru Veri Akışı",
    description: "Form okuma, veri çıkarma, belge sınıflandırma gibi işler anında ve 7/24 yapılır.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Link2,
    title: "Tüm Sistemlerle Entegrasyon",
    description: "ERP, CRM, WhatsApp, Telegram, e-posta, Google Sheets veya özel API'ler. Hepsiyle sorunsuz çalışır.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Kanıtlanabilir ROI",
    description: "Karar verdiğiniz her otomasyon, yatırım getirisini (ROI) net şekilde ölçülür.",
    color: "from-purple-500 to-pink-500",
  },
];

export function ValuePropositionSection() {
  return (
    <section className="relative py-20 bg-background/80 dark:bg-black/80 backdrop-blur-sm overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            heading="Neden AI Otomasyon?"
            headingHighlight="AI Otomasyon"
            subheading="İş değerlerini somut sonuçlara dönüştürün"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
              variant="elevated"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

