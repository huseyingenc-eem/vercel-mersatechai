"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { ExpandableCardGrid } from "@components/ui/cards";
import { SectionHeader } from "@components/shared";
import { departmentCardsData } from "./data";

const cards = departmentCardsData.map((dept) => ({
  title: dept.title,
  description: dept.description,
  src: dept.image,
  // ExpandableCardGrid şimdilik sadece title/description/src/content beklediği için
  // icon'u burada kullanmıyoruz. İlerde ihtiyaç olursa eklenir.
  content: () => (
    <div className="space-y-4">
      {dept.features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <Check className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
          <span className="text-sm text-muted-foreground">{feature}</span>
        </div>
      ))}
    </div>
  ),
}));

export function DepartmentsGrid() {
  return (
    <section className="relative py-20 bg-background/80 backdrop-blur-sm overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="mb-16">
          <SectionHeader
            heading="Her Departman için AI Çözümleri"
            headingHighlight="AI Çözümleri"
            subheading="Organizasyonunuzun her köşesinde yapay zeka ile verimliliği artırın"
          />
        </div>

        {/* Kart Grid */}
        <ExpandableCardGrid cards={cards} />

        {/* Alt CTA Bloğu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-2xl glass card-shadow-lg">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Departmanınız için özel çözüm mü arıyorsunuz?
              </h3>
              <p className="text-muted-foreground">
                Uzmanlarımızla görüşün ve size özel AI çözümleri keşfedin
              </p>
            </div>

            <button className="flex-shrink-0 px-6 py-3 rounded-lg font-medium border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2">
              İletişime Geç
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
