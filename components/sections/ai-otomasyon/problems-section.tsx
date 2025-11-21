"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users } from "lucide-react";
import { SectionHeader } from "@components/shared";

const problems = [
  {
    icon: AlertTriangle,
    title: "BT kuralları engelleyici değil, birleştirilmiş olmalıdır",
    description: "BT ekibinizin yazılım altyapısını yönetmede kontrolü olmalı ve bunu her gün yapması gerekir. Diğer departmanları uygulama ayrıntılarıyla boğmayın.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Clock,
    title: "Departmanların bilgi birikiminin aktarılması zordur",
    description: "Ekiplerinizin bilgi birikimlerini BT ve yazılımla paylaşmaya zorlamak, kuruluş genelindeki genel giderleri ve süreyi uzatacaktır.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Users,
    title: "Gizli süper güçler departmanlarınızda bulunur",
    description: "ChatGPT, herkesin teknolojik olarak ne icat edebileceğini açıkça ortaya koydu. Ekiplerinizin ne kadar çok işi otomatikleştirebildiklerini görebilirsiniz.",
    color: "from-blue-500 to-cyan-500",
  },
];

export function ProblemsSection() {
  return (
    <section className="relative py-20 bg-background dark:bg-neutral-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            heading="Geleneksel Yaklaşımın Sorunları"
            headingHighlight="Sorunları"
            subheading="Eski sistemler organizasyonunuzu yavaşlatıyor ve verimliliğinizi düşürüyor"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-300"
                   style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />

              <div className="relative bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-red-500/30 transition-all duration-300 h-full">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${problem.color} mb-6 shadow-lg`}>
                  <problem.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-tight">
                  {problem.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

