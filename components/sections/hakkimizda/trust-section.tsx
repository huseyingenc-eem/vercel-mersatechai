"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Users } from "lucide-react";

const trustReasons = [
  {
    icon: Target,
    title: "İş Hedefleri Odaklıyız",
    description: "Sadece teknoloji değil, sonuç konuşuyoruz."
  },
  {
    icon: TrendingUp,
    title: "Adım Adım Süreç",
    description: "Kafa karıştırmadan, her aşamada net ilerliyoruz."
  },
  {
    icon: Users,
    title: "Gerçek Uzmanlık",
    description: "AI, entegrasyon ve otomasyon üçlüsünde derin bilgi."
  }
];

export function TrustSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Neden İşletmeler Bize Güveniyor?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gerçek sonuçlar üreten, şeffaf ve samimi yaklaşımımız
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trustReasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />

              <div className="relative bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 text-center h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-base text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

