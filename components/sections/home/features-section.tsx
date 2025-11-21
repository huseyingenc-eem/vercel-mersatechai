"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Text, Card } from "@components/ui";
import { featuresData } from "./data";
import { HorizontalScrollContainer } from "@components/ui/sections/horizontal-scroll-container";

export function FeaturesSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const steps = featuresData.steps;

  // Header için bir ekran genişliği var, sonra kartlar
  // Aktif index: header geçtikten sonra hangi kart ortada
  const headerWeight = 0.15; // Header için progress payı
  const cardsProgress = Math.max(0, scrollProgress - headerWeight) / (1 - headerWeight);

  // Her kart için eşit pay
  const stepSize = 1 / steps.length;
  const activeIndex = Math.min(
    Math.floor(cardsProgress / stepSize + 0.5), // 0.5 ekleyerek ortada olunca aktif et
    steps.length - 1
  );

  return (
    <section
      id="features"
      className="relative bg-gradient-to-br from-muted/50 via-background to-primary/5"
    >
      <HorizontalScrollContainer
        onScrollUpdate={setScrollProgress}
        pinned={true}
        scrollMultiplier={0.5}
        className="h-[90vh]"
      >
        {/* Header Card - İlk ekran */}
        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl"
          >
            <Text variant="h2" theme="default" className="mb-4">
              {featuresData.heading}
            </Text>
            <Text variant="lead" theme="muted">
              {featuresData.subheading}
            </Text>
            <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
              <span className="text-sm">Kaydırmaya devam edin</span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Ana Kart - İçinde step kartlar ve progress bar */}
        <div className="flex-shrink-0 h-full flex items-center px-6">
          <div className="bg-card/90 backdrop-blur-md rounded-2xl border border-border/50 shadow-xl p-4 md:p-6">
            {/* Step Kartlar */}
            <div className="flex items-stretch gap-3 md:gap-4">
              {steps.map((step, index) => {
                const isStepActive = index === activeIndex && cardsProgress > 0;

                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-[65vw] sm:w-[45vw] md:w-[30vw] lg:w-[240px] rounded-xl transition-all duration-500 ${
                      isStepActive
                        ? "bg-primary/15 scale-100"
                        : "bg-transparent scale-[0.97] opacity-50"
                    }`}
                  >
                    <Card
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                      index={index}
                      variant="default"
                      className="w-full h-full min-h-[180px]"
                      alignment="left"
                      transparent={true}
                    />
                  </div>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 relative">
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-primary-warm rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min(cardsProgress * 100, 100)}%`
                  }}
                />
              </div>

              {/* Step Numbers */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between">
                {steps.map((_, index) => {
                  // Her step için pozisyon hesapla
                  const stepCenter = (index + 0.5) * stepSize;
                  const isLit = cardsProgress >= stepCenter - 0.1;
                  const isCurrentStep = index === activeIndex && cardsProgress > 0;

                  return (
                    <div
                      key={index}
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                        isCurrentStep
                          ? "bg-gradient-primary-warm text-white scale-125 shadow-lg"
                          : isLit
                          ? "bg-primary text-white scale-100"
                          : "bg-muted text-muted-foreground scale-90"
                      }`}
                    >
                      {index + 1}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Smooth end buffer - daha geniş */}
        <div className="flex-shrink-0 w-[30vw] h-full" />
      </HorizontalScrollContainer>
    </section>
  );
}
