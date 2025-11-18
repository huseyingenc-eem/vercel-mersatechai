"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Lightbulb, Check } from "lucide-react";

const reasons = [
  {
    title: "Gerçekçi ve uygulanabilir AI çözümleri",
    description: "Hayali değil, işe yarayan sistemler"
  },
  {
    title: "Ölçümlenebilir sonuç odaklı yaklaşım",
    description: "Her adımda somut metrikler"
  },
  {
    title: "Karmaşık süreçleri sadeleştiren tasarım",
    description: "Herkesin kullanabileceği çözümler"
  },
  {
    title: "Hızlı teslim + yüksek teknik uzmanlık",
    description: "Hem hızlı hem kaliteli"
  },
  {
    title: "İnsan odaklı iletişim, şeffaf iş modeli",
    description: "Her aşamada açık ve net"
  }
];

export function WhyMersaSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Fark Yaratan Yaklaşım</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Neden MERSA?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İşletmelerin AI ile gerçek değer üretmesini sağlayan yaklaşımımız
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />

              <div className="relative bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

