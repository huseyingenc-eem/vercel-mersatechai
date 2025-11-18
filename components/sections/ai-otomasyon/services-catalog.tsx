"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow,
  FileText,
  ScanText,
  Bot,
  Cpu,
  BarChart3,
  GraduationCap,
  ArrowRight,
  Check,
  MousePointer2
} from "lucide-react";
import { Card } from "@components/ui/core/card";
import { InteractiveCardStack } from "@components/ui/custom/interactive-card-stack";
import { useMediaQuery } from "@hooks/use-media-query";
import { H2, Lead, Tiny, H4 } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";

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
    category: "Doküman Dönüştürme",
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
    category: "Otomatik Veri Çıkarma",
    description: "Fatura, makbuz, sözleşme gibi dokümanlardan otomatik veri çıkarma.",
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
      "Web otomasyonu ve mail okuma",
      "Excel / Google Sheet otomasyonu",
      "AI destekli karar mekanizmaları"
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Bot,
    category: "Otomasyon Botları",
    description: "7/24 çalışan, hata yapmayan dijital işçilerinizi oluşturuyoruz.",
    features: [
      "Veri toplama ve raporlama botları",
      "Mesajlaşma ve CRM botları",
      "Özelleştirilmiş görev botları"
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: BarChart3,
    category: "Otomatik Raporlama",
    description: "Tüm verileri anında toplayan, sürekli güncel dashboard'lar.",
    features: [
      "KPI ve OKR takip sistemleri",
      "Otomatik excel/ppt/pdf raporları",
      "Power BI & Data Studio entegrasyonu"
    ],
    color: "from-yellow-500 to-orange-500",
  },
];

const ServiceCard = ({ service, index, variant = "elevated", className, isActive }: { service: typeof services[0], index: number, variant?: "elevated" | "flat", className?: string, isActive: boolean }) => (
  <Card
    icon={service.icon}
    title={service.category}
    description={service.description}
    index={index}
    variant={variant}
    className={cn("flex flex-col transition-opacity duration-300", isActive ? "opacity-100" : "opacity-80", className)}
  >
    <div className="space-y-3 mb-6 flex-grow">
      {service.features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <Check className={`w-4 h-4 mt-1 flex-shrink-0 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
          <span className="text-sm text-muted-foreground">{feature}</span>
        </div>
      ))}
    </div>
    <div className="mt-auto pt-4 border-t border-border/50 flex justify-end">
      <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group">
        Detaylı Bilgi
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </Card>
);

const DesktopView = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeService = services[activeIndex];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[550px]">
      <div className="lg:col-span-4 flex flex-col justify-center">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "text-left p-4 rounded-lg transition-all duration-300 relative",
              activeIndex === index ? "bg-primary/10" : "hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50"
            )}
          >
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  layoutId="active-service-indicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
            <H4 as="h3" theme={activeIndex === index ? "primary" : "default"} className="font-semibold">
              {service.category}
            </H4>
          </button>
        ))}
      </div>
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="h-full"
          >
            <ServiceCard service={activeService} index={activeIndex} isActive={true} className="h-full" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export function ServicesSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <Container sectionBg="slate" className="py-20">
      <div className="text-center mb-16">
        <H2 animate className="mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            AI Otomasyon Hizmetleri
          </span>
        </H2>
        <Lead theme="muted" animate animationDelay={0.2} className="max-w-3xl mx-auto">
          Her iş sürecine özel, uçtan uca yapay zeka çözümleri
        </Lead>
      </div>

      {isDesktop ? (
        <DesktopView />
      ) : (
        <div className="relative">
          <InteractiveCardStack
            items={services}
            renderItem={(service, index, isActive) => (
              <ServiceCard 
                service={service} 
                index={index} 
                variant={isActive ? "elevated" : "flat"} 
                className="h-full"
                isActive={isActive}
              />
            )}
            cardHeight={520}
            cardWidth={340}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute top-1/2 -translate-y-1/2 -right-2 sm:right-0 flex flex-col items-center pointer-events-none"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MousePointer2 className="w-8 h-8 text-primary transform -rotate-90" />
            </motion.div>
            <Tiny theme="muted" className="mt-3 uppercase tracking-widest [writing-mode:vertical-rl]">
              Kaydır
            </Tiny>
          </motion.div>
        </div>
      )}
    </Container>
  );
}