"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Building2, Users, Megaphone, GraduationCap, Briefcase } from "lucide-react";
import { Container } from "@components/shared/container";

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-Ticaret",
    problem: "Ziyaretçiler soru sorup yanıt alamıyor",
    solution: "7/24 ürün danışmanlığı + sepet hatırlatıcısı",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    icon: Building2,
    title: "B2B Şirketler",
    problem: "Lead'ler kaybolup gidiyor",
    solution: "Otomatik lead toplama + CRM entegrasyonu",
    gradient: "from-blue-400 to-cyan-600"
  },
  {
    icon: Users,
    title: "Hizmet İşletmeleri",
    problem: "Rezervasyon takibi çok zor",
    solution: "WhatsApp üzerinden otomatik rezervasyon",
    gradient: "from-purple-400 to-pink-600"
  },
  {
    icon: Megaphone,
    title: "Ajanslar",
    problem: "Çoklu müşteri takibi karmaşık",
    solution: "Merkezi lead toplama + raporlama",
    gradient: "from-orange-400 to-red-600"
  },
  {
    icon: GraduationCap,
    title: "Eğitim",
    problem: "Öğrenci soruları yanıtsız kalıyor",
    solution: "Otomatik soru-cevap + kayıt sistemi",
    gradient: "from-indigo-400 to-purple-600"
  },
  {
    icon: Briefcase,
    title: "Profesyonel Hizmetler",
    problem: "Randevu yönetimi manuel",
    solution: "Akıllı randevu + hatırlatma sistemi",
    gradient: "from-teal-400 to-green-600"
  }
];

export function UseCasesPreview() {
  return (
    <Container id="usecases" sectionBg="slate" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sektörünüze Özel Çözümler
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Her sektör için özelleştirilmiş AI otomasyon çözümleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300">
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-3 sm:mb-4`}>
                  <useCase.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                  {useCase.title}
                </h3>

                {/* Problem */}
                <div className="mb-3">
                  <div className="text-sm text-muted-foreground mb-1">Problem:</div>
                  <div className="text-sm text-foreground">{useCase.problem}</div>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-1">Çözüm:</div>
                  <div className="text-sm text-blue-500 dark:text-blue-400">{useCase.solution}</div>
                </div>

                {/* Link */}
                <a
                  href="/hizmetler"
                  className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Detayları Görün
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/hizmetler"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all text-sm sm:text-base"
          >
            Tüm Kullanım Senaryoları
          </a>
        </motion.div>
      </Container>
  );
}
