"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { HorizontalScrollContainer } from "@components/ui/sections/horizontal-scroll-container";
import { CTASection } from "@components/shared/cta-section";

// Hizmet verileri - basit ve odaklı
const services = [
  {
    id: "satis",
    title: "Satış Otomasyonu",
    subtitle: "Ziyaretçiden müşteriye",
    description: "Web sitenize gelen her ziyaretçiyi otomatik karşılayın, sorularını yanıtlayın ve satış fırsatına dönüştürün.",
    features: [
      "7/24 otomatik karşılama",
      "Akıllı soru-cevap sistemi",
      "Randevu ve demo planlama",
      "CRM entegrasyonu",
      "Lead skorlama",
    ],
  },
  {
    id: "destek",
    title: "Müşteri Desteği",
    subtitle: "Anında yanıt, sınırsız kapasite",
    description: "Müşteri sorularını saniyeler içinde yanıtlayın. Destek ekibinizin yükünü azaltın, memnuniyeti artırın.",
    features: [
      "Sık sorulan sorular otomasyonu",
      "Çoklu dil desteği",
      "WhatsApp & Telegram entegrasyonu",
      "Akıllı yönlendirme",
      "Anlık bildirimler",
    ],
  },
  {
    id: "ozel",
    title: "Özel İş Akışları",
    subtitle: "Size özel tasarlanmış",
    description: "Sipariş takibi, rezervasyon, anket toplama - işinize özel AI asistanlar ile her süreci otomatikleştirin.",
    features: [
      "Özel konuşma akışları",
      "Sipariş ve rezervasyon yönetimi",
      "Form ve anket toplama",
      "API entegrasyonları",
      "Raporlama ve analitik",
    ],
  },
];

// Sektörler - kısa ve öz
const sectors = [
  { name: "E-Ticaret", solution: "Ürün danışmanlığı + sepet hatırlatma" },
  { name: "B2B", solution: "Lead toplama + CRM senkronizasyonu" },
  { name: "Hizmet", solution: "Rezervasyon + takvim entegrasyonu" },
  { name: "Eğitim", solution: "Soru-cevap + kayıt otomasyonu" },
  { name: "Ajans", solution: "Merkezi lead yönetimi + raporlama" },
  { name: "Sağlık", solution: "Randevu + hasta takip sistemi" },
];

export default function HizmetlerPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Aktif hizmet index'i hesapla
  const headerWeight = 0.15;
  const contentProgress = Math.max(0, scrollProgress - headerWeight) / (1 - headerWeight);
  const stepSize = 1 / services.length;
  const activeIndex = Math.min(
    Math.floor(contentProgress / stepSize + 0.3),
    services.length - 1
  );

  return (
    <div className="bg-background text-foreground">
      {/* Hero - Minimal */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">AI Otomasyon</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              İşinizi{" "}
              <span className="text-primary">Otomatikleştirin</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Yapay zeka destekli çözümlerimizle müşteri iletişimini dönüştürün,
              satışları artırın ve operasyonel maliyetleri düşürün.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-[hsl(var(--primary-hover))] transition-all"
              >
                Ücretsiz Danışmanlık
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-medium hover:bg-muted transition-all"
              >
                Hizmetleri İncele
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hizmetler - Horizontal Scroll */}
      <section id="hizmetler" className="relative bg-gradient-to-br from-muted/30 via-background to-primary/5">
        <HorizontalScrollContainer
          onScrollUpdate={setScrollProgress}
          onActiveChange={setIsActive}
          pinned={true}
          scrollMultiplier={0.7}
          className="h-[85vh]"
        >
          {/* İlk Ekran - Başlangıç + Tab Navigation */}
          <div className="flex-shrink-0 w-screen h-full flex flex-col">

            {/* Başlangıç İçeriği */}
            <div className="flex-1 flex items-center justify-center px-4">
              <div className="text-center max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Hizmetlerimizi Keşfedin
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Kaydırarak tüm hizmetlerimizi inceleyin
                </p>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-primary text-2xl"
                >
                  →
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hizmet Kartları */}
          {services.map((service, index) => (
            <div
              key={service.id}
              className="flex-shrink-0 w-screen h-full flex flex-col"
            >

              {/* Hizmet İçeriği */}
              <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
                <div
                  className={cn(
                    "max-w-5xl w-full transition-all duration-500",
                    activeIndex === index && isActive
                      ? "opacity-100 scale-100"
                      : "opacity-40 scale-95"
                  )}
                >
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Sol - Text */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <span className="inline-block text-sm font-semibold text-primary mb-2">
                        0{index + 1}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <a
                        href="/iletisim"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        Bu hizmeti incele
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Sağ - Checklist */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                          Özellikler
                        </h3>
                        <ul className="space-y-4">
                          {service.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3"
                            >
                              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End buffer */}
          <div className="flex-shrink-0 w-[20vw] h-full" />
        </HorizontalScrollContainer>
      </section>

      {/* Sektörler - Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Her Sektör İçin Çözümler
            </h2>
            <p className="text-muted-foreground">
              Sektörünüze özel AI otomasyon
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 sm:p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <h3 className="font-semibold text-foreground mb-1">
                  {sector.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {sector.solution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Shared Component */}
      <CTASection
        variant="default"
        heading="Başlamaya Hazır mısınız?"
        description="Ücretsiz danışmanlık ile işinize en uygun çözümü birlikte belirleyelim."
        primaryButton={{
          text: "İletişime Geç",
          href: "/iletisim",
          icon: "phone",
        }}
        secondaryButton={{
          text: "WhatsApp",
          href: "https://wa.me/905551234567",
          icon: "message",
          variant: "outline",
        }}
        trustIndicators={[
          { text: "Ücretsiz Görüşme" },
          { text: "24 Saat İçinde Dönüş" },
          { text: "Teklif Zorunluluğu Yok" },
        ]}
      />
    </div>
  );
}
