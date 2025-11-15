"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Workflow,
  GitBranch,
  Sparkles,
} from "lucide-react";
import { WobbleCard } from "@components/ui/wobble-card";

const services = [
  {
    title: "Satış ve Müşteri Kazanımı",
    description:
      "Web sitenize gelen ziyaretçileri otomatik olarak karşılayın, sorularını yanıtlayın ve randevu alın. AI chatbot 7/24 çalışarak sizin için potansiyel müşteri toplayıp, satış ekibinize hazır şekilde iletir.",
    icon: MessageSquare,
    gradient: "from-green-400 to-emerald-600",
    features: ["Otomatik müşteri toplama", "Randevu yönetimi", "Satış entegrasyonu"]
  },
  {
    title: "Müşteri Destek Otomasyonu",
    description:
      "Sık sorulan soruları otomatik yanıtlayın, destek taleplerini yönlendirin ve müşteri memnuniyetini artırın. Telegram ve WhatsApp üzerinden anlık destek sağlayarak yanıt süresini %80 azaltın.",
    icon: Workflow,
    gradient: "from-blue-400 to-cyan-600",
    features: ["7/24 anlık destek", "Çok dilli destek", "Talep yönlendirme"]
  },
  {
    title: "Özel İş Akışları",
    description:
      "İş süreçlerinize özel AI sohbet robotları. Sipariş takibi, randevu alma, sipariş toplama veya her türlü iş akışınızı otomatikleştirin. İstediğiniz platforma entegre edilebilir.",
    icon: GitBranch,
    gradient: "from-purple-400 to-pink-600",
    features: ["Özel iş süreçleri", "Çoklu platform desteği", "Sistem entegrasyonu"]
  },
];

export function ServicesSection() {
  return (
    <div data-section="services" className="relative w-full py-20 bg-background dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 dark:text-blue-300">Solutions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            İş Süreçlerinizi Otomatikleştirin
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Satıştan müşteri desteğine, her iş akışınız için AI-powered çözümler
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          {/* Satış ve Müşteri Kazanımı - 2 Column Span */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2"
          >
            <WobbleCard
              containerClassName="h-full bg-gradient-to-br from-green-400 to-emerald-600 min-h-[350px] lg:min-h-[280px]"
              className="p-4 sm:p-6"
            >
              <div className="max-w-sm">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-left text-balance text-base md:text-lg lg:text-2xl font-semibold tracking-[-0.015em] text-white mb-3">
                  {services[0].title}
                </h2>

                {/* Description */}
                <p className="text-left text-sm/6 text-white/80">
                  {services[0].description}
                </p>

                {/* Features */}
                <div className="space-y-1.5 mt-4">
                  {services[0].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </WobbleCard>
          </motion.div>

          {/* Müşteri Destek Otomasyonu - 1 Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <WobbleCard
              containerClassName="h-full bg-gradient-to-br from-blue-400 to-cyan-600 min-h-[280px]"
              className="p-4 sm:p-6"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                <Workflow className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-left text-balance text-base md:text-lg lg:text-2xl font-semibold tracking-[-0.015em] text-white mb-3">
                {services[1].title}
              </h2>

              {/* Description */}
              <p className="text-left text-sm/6 text-white/80">
                {services[1].description}
              </p>

              {/* Features */}
              <div className="space-y-1.5 mt-4">
                {services[1].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </WobbleCard>
          </motion.div>

          {/* Özel İş Akışları - Full Width 3 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-3"
          >
            <WobbleCard
              containerClassName="bg-gradient-to-br from-purple-400 to-pink-600 min-h-[350px] lg:min-h-[280px] xl:min-h-[250px]"
              className="p-4 sm:p-6"
            >
              <div className="max-w-sm">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <GitBranch className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-left text-balance text-base md:text-lg lg:text-2xl font-semibold tracking-[-0.015em] text-white mb-3">
                  {services[2].title}
                </h2>

                {/* Description */}
                <p className="text-left text-sm/6 text-white/80">
                  {services[2].description}
                </p>

                {/* Features */}
                <div className="space-y-1.5 mt-4">
                  {services[2].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </WobbleCard>
          </motion.div>
        </div>

      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
    </div>
  );
}
