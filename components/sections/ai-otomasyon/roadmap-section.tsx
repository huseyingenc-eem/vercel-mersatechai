"use client";

import React from "react";
import { Timeline } from "@components/ui/sections/timeline";
import { Search, Database, Cpu, TrendingUp } from "lucide-react";

const roadmapData = [
  {
    title: "Adım 1",
    content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-sm">
              <Search className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Keşfet: ROI Odaklı YZ Stratejisi
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-lg">
                &ldquo;YZ bir teknoloji değil, bir yatırım aracıdır.&rdquo;
              </p>
            </div>
          </div>

        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Süreç analizi",
              "ROI hesaplama",
              "Kullanım alanı belirleme",
              "Yönetici çalıştayları (AI Vision Workshop)"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Adım 2",
    content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-sm">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Planla: Veri ve Altyapı Mimarisi
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-lg">
                &ldquo;Her başarılı YZ çözümü doğru veriyle başlar.&rdquo;
              </p>
            </div>
          </div>

        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "KVKK/GDPR uyumlu veri modeli",
              "OpenStack ile özel YZ bulutu",
              "Altyapı ve güvenlik planlaması",
              "Veri mimarisi tasarımı"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Adım 3",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-sm">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Uygula: AI Agent & Otomasyon Geliştirme
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-lg">
              &ldquo;İşlerinizi sizin yerinize yapan otonom sistemler.&rdquo;
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Özel AI Agent geliştirme",
              "NLP, OCR, görüntü işleme modelleri",
              "Backend API entegrasyonları",
              "MLOps otomasyonu"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Adım 4",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-sm">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Büyüt: Sürdürülebilir Operasyon
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-lg">
              &ldquo;Operasyonel verimliliği sürekli artırıyoruz.&rdquo;
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Model izleme (drift detection)",
              "7/24 bakım ve destek",
              "Kurumsal AI eğitimleri",
              "Yönetici panelleri ve raporlama"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export function RoadmapSection() {
  return (
    <section className="relative bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Yapay Zeka Dönüşüm Yol Haritası
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            4 adımda AI transformation&apos;a başlayın
          </p>
        </div>
      </div>

      <Timeline data={roadmapData} />
    </section>
  );
}

