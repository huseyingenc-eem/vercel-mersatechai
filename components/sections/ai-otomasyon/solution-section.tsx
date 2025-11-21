"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, Layers } from "lucide-react";
import { SectionHeader } from "@components/shared";

export function SolutionSection() {
  return (
    <section className="relative py-20 bg-secondary dark:bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            badge="Çözüm"
            heading="Tüm organizasyonunuzu otomatikleştirin"
            headingHighlight="otomatikleştirin"
            subheading="İster beğenin ister beğenmeyin, Yapay Zeka her organizasyonun her departmanında olacak. MersaTech, ekibinizin dinamik kalmasını sağlayan Yapay Zeka altyapısıdır."
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Zap,
              title: "Hızlı Kurulum",
              description: "Dakikalar içinde başlayın",
              color: "from-yellow-500 to-orange-500",
            },
            {
              icon: Shield,
              title: "Güvenli Altyapı",
              description: "Kurumsal güvenlik standartları",
              color: "from-green-500 to-emerald-500",
            },
            {
              icon: Layers,
              title: "Esnek Entegrasyon",
              description: "Mevcut sistemlerinizle uyumlu",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: Sparkles,
              title: "Kolay Kullanım",
              description: "Teknik bilgi gerektirmez",
              color: "from-purple-500 to-pink-500",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} mb-4`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

