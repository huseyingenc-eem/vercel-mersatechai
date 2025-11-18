"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  Users,
  Lightbulb,
  Code,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { Container } from "@components/shared/container";
import { Card } from "@components/ui/core/card";
import { Text } from "@components/ui/typography/text";

const steps = [
  {
    icon: Users,
    title: "Sizi Dinliyoruz",
    description:
      "Ne istediğinizi, hangi probleminizi çözmek istediğinizi konuşuyoruz.",
  },
  {
    icon: Lightbulb,
    title: "Fikir Üretiyoruz",
    description:
      "Size en uygun çözümü buluyoruz. Nasıl çalışacağını gösteriyoruz.",
  },
  {
    icon: Code,
    title: "Yapıyoruz",
    description:
      "Sizin için özel olarak yapay zeka botunuzu veya sisteminizi kuruyoruz.",
  },
  {
    icon: Rocket,
    title: "Başlatıyoruz",
    description:
      "Sisteminiz çalışmaya başlıyor. Size nasıl kullanacağınızı öğretiyoruz.",
  },
  {
    icon: HeartHandshake,
    title: "Yanınızdayız",
    description:
      "Her zaman yanınızdayız. Sorun olursa hemen çözüyoruz.",
  },
];

export function FeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (info.offset.x < -threshold && currentIndex < steps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Container id="features" sectionBg="white" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Text variant="h2" theme="default" className="mb-4">
          Nasıl Çalışıyoruz?
        </Text>
        <Text variant="lead" theme="muted" className="max-w-2xl mx-auto">
          5 basit adımda işiniz hazır
        </Text>
      </motion.div>

      {/* Main Card Container */}
      <div className="relative p-4 sm:p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm shadow-lg">

        {/* Desktop Grid View - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative flex min-h-[250px]">
              {/* Step Number - Sol üst köşede */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-lg z-20">
                {index + 1}
              </div>

              {/* Card Component - Saydam */}
              <Card
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index}
                variant="default"
                transparent={true}
                className="w-full h-full"
                alignment={"left"}
              />

              {/* Connecting arrow */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 translate-x-full z-10">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-purple-600"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View - Swipe enabled */}
        <div className="lg:hidden overflow-hidden -mx-4 sm:-mx-8">
          <div className="relative px-4 sm:px-8">
            {/* Carousel Container */}
            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative cursor-grab active:cursor-grabbing"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-lg z-20">
                    {currentIndex + 1}
                  </div>

                  {/* Card - Saydam, tam genişlik */}
                  <Card
                    icon={steps[currentIndex].icon}
                    title={steps[currentIndex].title}
                    description={steps[currentIndex].description}
                    index={0}
                    variant="default"
                    transparent={true}
                    className="h-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Swipe Hint - İlk kartda göster */}
            {currentIndex === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-center mt-4"
              >
                <Text variant="small" theme="muted" className="text-xs">
                  ← Kaydırarak gezin →
                </Text>
              </motion.div>
            )}
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8 px-4 sm:px-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-gradient-to-r from-blue-600 to-purple-600"
                    : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`${index + 1}. adıma git`}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

