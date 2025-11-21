"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Users } from "lucide-react";
import { Text } from "@components/ui";
import { Container, SectionHeader } from "@/components/shared";

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
    <Container className="py-20">
      <div className="mb-16">
        <SectionHeader
          heading="Neden İşletmeler Bize Güveniyor?"
          headingHighlight="Güveniyor?"
          subheading="Gerçek sonuçlar üreten, şeffaf ve samimi yaklaşımımız"
        />
      </div>

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
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />

            <div className="relative bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 text-center h-full">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <Text variant="h5" className="font-bold text-foreground mb-3">
                {reason.title}
              </Text>
              <Text theme="muted">
                {reason.description}
              </Text>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
