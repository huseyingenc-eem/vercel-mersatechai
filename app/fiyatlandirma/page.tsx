"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Sparkles, Zap, Shield, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui";

// Load heavy/background animation components only on client to avoid build-time errors
const BackgroundBeams = dynamic(() => import("@/components/ui/backgrounds/background-beams").then((mod) => mod.BackgroundBeams), { ssr: false });
const Spotlight = dynamic(() => import("@/components/ui/backgrounds/spotlight").then((mod) => mod.Spotlight), { ssr: false });

const pricingPlans = [
  {
    name: "Starter",
    price: "9.999",
    period: "/ay",
    description: "Küçük işletmeler için ideal başlangıç paketi",
    features: [
      { text: "1 AI Chatbot (Telegram veya WhatsApp)", included: true },
      { text: "1.000 mesaj/ay", included: true },
      { text: "FAQ otomatik yanıtlama", included: true },
      { text: "Temel analitik", included: true },
      { text: "E-posta destek", included: true },
      { text: "CRM entegrasyonu", included: false },
      { text: "Slack/Teams bildirimleri", included: false },
      { text: "Özel conversation flow'lar", included: false },
    ],
    cta: "Başla",
    popular: false,
    icon: Zap
  },
  {
    name: "Professional",
    price: "24.999",
    period: "/ay",
    description: "Büyüyen şirketler için kapsamlı çözüm",
    features: [
      { text: "2 Platform entegrasyonu", included: true },
      { text: "5.000 mesaj/ay", included: true },
      { text: "CRM entegrasyonu (HubSpot/Pipedrive)", included: true },
      { text: "Slack/Teams bildirimleri", included: true },
      { text: "Özel conversation flow'lar", included: true },
      { text: "Gelişmiş analitik & raporlama", included: true },
      { text: "Öncelikli destek", included: true },
      { text: "Lead scoring", included: true },
    ],
    cta: "Hemen Başla",
    popular: true,
    icon: Sparkles
  },
  {
    name: "Enterprise",
    price: "Özel",
    period: "Teklif",
    description: "Kurumsal şirketler için özel çözümler",
    features: [
      { text: "Sınırsız platform entegrasyonu", included: true },
      { text: "Sınırsız mesaj", included: true },
      { text: "N8N özel otomasyon", included: true },
      { text: "Dedicated success manager", included: true },
      { text: "SLA garantisi", included: true },
      { text: "Özel eğitim ve onboarding", included: true },
      { text: "7/24 teknik destek", included: true },
      { text: "Custom API geliştirme", included: true },
    ],
    cta: "İletişime Geçin",
    popular: false,
    icon: Shield
  }
];

const faqs = [
  {
    question: "Kurulum ne kadar sürer?",
    answer: "Genellikle 1-2 hafta içinde chatbot'unuz hazır ve yayında olur. Süre, entegrasyon sayısına ve özelleştirme ihtiyaçlarınıza göre değişiklik gösterebilir."
  },
  {
    question: "Sözleşme süresi var mı?",
    answer: "Hayır, aylık esnek çalışıyoruz. İstediğiniz zaman iptal edebilirsiniz. Uzun vadeli anlaşmalarda indirim uyguluyoruz."
  },
  {
    question: "Destek dahil mi?",
    answer: "Evet, tüm paketlerde teknik destek dahildir. Professional ve Enterprise paketlerde öncelikli destek sunuyoruz."
  },
  {
    question: "Mesaj limiti aşılırsa ne olur?",
    answer: "Ek mesajlar için makul fiyatlarla ekleme yapabilirsiniz. Enterprise planda sınırsız mesaj hakkınız bulunur."
  },
  {
    question: "Ücretsiz deneme var mı?",
    answer: "Evet, 14 gün ücretsiz deneme sunuyoruz. Kredi kartı bilgisi gerekmez."
  },
  {
    question: "Hangi platformları destekliyorsunuz?",
    answer: "Telegram, WhatsApp Business, Facebook, LinkedIn, Instagram ve web sitesi formlarını destekliyoruz. Özel platform talepleriniz için iletişime geçin."
  }
];

export default function FiyatlandirmaPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // İlk soru açık başlasın

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 z-0" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw] z-0" fill="purple" />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-[100px] will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-[120px] will-change-transform"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Esnek ve Şeffaf Fiyatlandırma
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Fiyatlandırma
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            İşletmenizin büyüklüğüne ve ihtiyaçlarına uygun esnek paketler
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0 opacity-20" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold z-20">
                    En Popüler
                  </div>
                )}

                {/* Glow Effect */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 pointer-events-none" />
                )}

                <div className={`relative h-full p-8 rounded-3xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-card/80 dark:bg-card/50 backdrop-blur-xl border-blue-500'
                    : 'bg-card/50 dark:bg-card/30 backdrop-blur-xl border-border hover:border-blue-500/50'
                }`}>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      {plan.price !== "Özel" && (
                        <span className="text-muted-foreground text-2xl">₺</span>
                      )}
                      <span className="text-4xl md:text-5xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-lg">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-500" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-3 h-3 text-muted-foreground" />
                          </div>
                        )}
                        <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full py-6 text-base font-semibold ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                        : 'bg-secondary hover:bg-secondary/80 text-foreground'
                    }`}
                  >
                    <a href="/iletisim">
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl transition-all duration-300 pointer-events-none" />

            <div className="relative bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Tüm Paketlerde Dahil
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Ücretsiz 14 gün deneme",
                  "Kurulum ve eğitim dahil",
                  "İlk ay ücretsiz destek",
                  "İstediğiniz zaman iptal",
                  "Düzenli güncellemeler",
                  "Veri güvenliği garantisi"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0 opacity-20" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-lg text-muted-foreground">
              Merak ettikleriniz hakkında detaylı bilgiler
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative bg-card/50 dark:bg-card/30 backdrop-blur-xl rounded-2xl border border-border overflow-hidden transition-all duration-300">
                    {/* Question - Clickable Header */}
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-accent/5 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-foreground">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </button>

                    {/* Answer - Animated Collapse */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-blue-600/10 to-purple-600/10">
        <BackgroundBeams className="absolute inset-0 z-0 opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Hala Emin Değil misiniz?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ücretsiz görüşmede size en uygun paketi birlikte belirleyelim
            </p>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6"
            >
              <a href="/iletisim">
                Ücretsiz Görüşme Talep Edin
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

