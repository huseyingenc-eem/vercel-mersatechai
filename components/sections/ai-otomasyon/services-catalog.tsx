"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  FileText,
  ScanText,
  Bot,
  Cpu,
  BarChart3,
  GraduationCap,
  ArrowRight,
  Check
} from "lucide-react";
import { Card } from "@components/ui/card";

const services = [
  {
    icon: Workflow,
    category: "AI Süreç Otomasyonu",
    description: "Operasyonlarınızı baştan sona otonom hale getiren AI tabanlı iş akışları.",
    features: [
      "Süreç analizi ve otomasyon tasarımı",
      "İnsan-onaylı (human-in-the-loop) workflow",
      "API destekli kurumsal entegrasyonlar"
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    category: "Doküman Dönüştürme (PDF, Görüntü, Metin)",
    description: "Her türlü dokümanı yapay zeka ile okunabilir ve kullanılır hale getirme.",
    features: [
      "PDF → Word, Excel, JSON dönüşümü",
      "Görüntüden metin çıkarma",
      "Kurumsal doküman standardizasyonu"
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: ScanText,
    category: "Otomatik Veri Çıkarma (OCR & Form Tanıma)",
    description: "Fatura, makbuz, başvuru formu, sözleşme, KYC dokümanı...",
    features: [
      "OCR + LLM destekli veri çıkarma",
      "Tablo tespiti, alan tanıma",
      "API aracılığıyla CRM/ERP'ye aktarma"
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cpu,
    category: "RPA + AI İş Akışları",
    description: "Klasik RPA'nın sınırlarını genişleten yapay zeka tabanlı robotlar.",
    features: [
      "Web otomasyonu",
      "Mail okuma & yönlendirme",
      "Excel / Google Sheet otomasyonu",
      "AI destekli karar mekanizmaları"
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Bot,
    category: "Otomasyon Botları",
    description: "7/24 çalışan dijital işçilerinizi oluşturuyoruz.",
    features: [
      "Veri toplama botları",
      "Mesajlaşma botları",
      "Raporlama botları",
      "CRM güncelleyen botlar"
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: BarChart3,
    category: "Otomatik Raporlama & Dashboard",
    description: "Tüm verileri anında toplayan ve sürekli güncel dashboard'lar.",
    features: [
      "KPI ve OKR takip sistemleri",
      "Otomatik excel/ppt/pdf raporları",
      "Power BI — Google Data Studio entegrasyonu"
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: GraduationCap,
    category: "AI Eğitim Modülleri",
    description: "Kurum içi yapay zeka yetkinliklerini hızlandırmak için eğitim paketleri.",
    features: [
      "AI Temelleri",
      "Prompt Engineering",
      "İş Süreçlerinde AI",
      "RPA & AI Entegrasyon Eğitimi",
      "Kurumsal AI Eğitim Programı"
    ],
    color: "from-cyan-500 to-blue-500",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-20 bg-background/80 dark:bg-neutral-950/80 backdrop-blur-sm overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              AI Otomasyon Hizmetleri
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Her iş sürecine özel yapay zeka çözümleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.category}
              description={service.description}
              index={index}
              variant="elevated"
            >
              <div className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300 group/btn">
                Detaylı Bilgi
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

