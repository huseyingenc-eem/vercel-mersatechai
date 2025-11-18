"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { PageHero } from "@/components/shared/page-hero";
import { AboutStorySection } from "@components/sections/hakkimizda/about-story-section";
import { WhyMersaSection } from "@components/sections/hakkimizda/why-mersa-section";
import { CoreValuesSection } from "@components/sections/hakkimizda/core-values-section";
import { TrustSection } from "@components/sections/hakkimizda/trust-section";
import { TrustedBySection } from "@components/sections/hakkimizda/trusted-by-section";

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

      {/* CTA Section - Background yok, sadece gradient */}
      <section className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div className="relative bg-card/30 dark:bg-card/20 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Birlikte Çalışmaya Hazır mısınız?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Projenizi konuşmak ve size nasıl yardımcı olabileceğimizi keşfetmek için iletişime geçin
              </p>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group text-lg px-8 py-6"
              >
                <a href="/iletisim" className="inline-flex items-center gap-2">
                  İletişime Geçin
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

