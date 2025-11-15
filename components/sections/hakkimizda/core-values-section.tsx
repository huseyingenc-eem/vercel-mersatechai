"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Users } from "lucide-react";
import { Card, BackgroundBeams } from "@components/ui";

const coreValues = [
  {
    icon: Sparkles,
    title: "Merak",
    description: 'Her "neden?" ve "nasıl olur?" sorusu yeni bir çözümün ilk adımıdır. Bu merak bizi sürekli daha iyi AI sistemleri kurmaya yönlendirir.'
  },
  {
    icon: Zap,
    title: "Sadelik",
    description: "Eğer bir çözümü kullanmak için eğitim şartsa, yanlış yapıyoruz demektir. Tüm sistemleri herkesin kullanabileceği kadar sade tasarlarız."
  },
  {
    icon: Users,
    title: "Verimlilik",
    description: "Tekrarlayan işleri AI'nin, değer üreten işleri insanların yapması gerektiğine inanıyoruz. Bu yüzden süreçleri otomatikleştirmek en büyük tutkumuz."
  }
];

export function CoreValuesSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <BackgroundBeams className="absolute inset-0 z-0 opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Değerlerimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MERSA&apos;yı ayakta tutan temel prensipler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
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

