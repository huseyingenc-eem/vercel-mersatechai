"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button, BackgroundBeams, Spotlight } from "@/components/ui";
import { AboutStorySection } from "@components/sections/hakkimizda/about-story-section";
import { WhyMersaSection } from "@components/sections/hakkimizda/why-mersa-section";
import { CoreValuesSection } from "@components/sections/hakkimizda/core-values-section";
import { TrustSection } from "@components/sections/hakkimizda/trust-section";
import { TrustedBySection } from "@components/sections/hakkimizda/trusted-by-section";

export default function HakkimizdaPage() {
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
              MERSA Technology
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Hakkımızda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Yapay zeka teknolojileri ile işletmelerin müşteri iletişimini dönüştürüyoruz
          </motion.p>
        </div>
      </section>

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

      {/* CTA Section - Full Width Background */}
      <section className="relative w-full py-20 overflow-hidden bg-gradient-to-br from-blue-600/10 to-purple-600/10">
        <BackgroundBeams className="absolute inset-0 z-0 opacity-20" />

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

