"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Code,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { Card } from "@components/ui/card";

const steps = [
  {
    icon: Users,
    title: "Sizi Dinliyoruz",
    description:
      "Ne istediğinizi, hangi probleminizi çözmek istediğinizi konuşuyoruz.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Fikir Üretiyoruz",
    description:
      "Size en uygun çözümü buluyoruz. Nasıl çalışacağını gösteriyoruz.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Yapıyoruz",
    description:
      "Sizin için özel olarak yapay zeka botunuzu veya sisteminizi kuruyoruz.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Rocket,
    title: "Başlatıyoruz",
    description:
      "Sisteminiz çalışmaya başlıyor. Size nasıl kullanacağınızı öğretiyoruz.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: HeartHandshake,
    title: "Yanınızdayız",
    description:
      "Her zaman yanınızdayız. Sorun olursa hemen çözüyoruz.",
    color: "from-indigo-500 to-purple-500",
  },
];

export function FeaturesSection() {
  return (
    <div data-section="features" className="relative w-full py-20 bg-background dark:bg-neutral-950">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            5 basit adımda işiniz hazır
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index}
                variant="elevated"
              />

              {/* Step Number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg z-20">
                {index + 1}
              </div>

              {/* Connecting arrow for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 translate-x-full z-10">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-purple-600"></div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
    </div>
  );
}
