"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileCheck, MessageSquare, ShoppingCart, Users as UsersIcon, BarChart } from "lucide-react";
import { Card } from "@components/ui/card";

const useCases = [
  {
    icon: FileCheck,
    title: "Otomatik Fatura ve Form Okuma",
    description: "PDF → JSON → ERP %90 zaman tasarrufu",
    details: "Fatura, makbuz ve formları otomatik okuyarak ERP sisteminize aktarın. Manuel veri girişini ortadan kaldırın.",
    color: "from-blue-500 to-cyan-500",
    stats: { value: "%90", label: "Zaman Tasarrufu" }
  },
  {
    icon: MessageSquare,
    title: "WhatsApp – Telegram – CRM Otomasyonu",
    description: "Müşteri mesajlarını sınıflandır, yanıtla, CRM'e kaydet.",
    details: "Gelen mesajları AI ile analiz edin, otomatik yanıt verin ve tüm müşteri etkileşimlerini CRM'de saklayın.",
    color: "from-green-500 to-emerald-500",
    stats: { value: "7/24", label: "Kesintisiz Destek" }
  },
  {
    icon: ShoppingCart,
    title: "Teklif – Sipariş – Stok Otomasyonu",
    description: "E-posta → AI → ERP → rapor",
    details: "E-posta ile gelen siparişleri otomatik işleyin, stok kontrolü yapın ve ERP'ye aktarın. Anlık raporlama.",
    color: "from-purple-500 to-pink-500",
    stats: { value: "%80", label: "Hata Azaltma" }
  },
  {
    icon: UsersIcon,
    title: "İnsan Kaynakları Otomasyonu",
    description: "CV analizi, aday sınıflandırma, toplantı planlama.",
    details: "Binlerce CV'yi AI ile analiz edin, en uygun adayları belirleyin ve görüşme sürecini otomatikleştirin.",
    color: "from-orange-500 to-red-500",
    stats: { value: "10x", label: "Daha Hızlı İşe Alım" }
  },
  {
    icon: BarChart,
    title: "Raporlama Otomasyonu",
    description: "Her gün otomatik e-posta: Satış – stok – insan kaynakları – finans verileri.",
    details: "Tüm departmanlardan veri toplayıp günlük, haftalık veya aylık raporları otomatik oluşturun ve gönderin.",
    color: "from-yellow-500 to-orange-500",
    stats: { value: "100%", label: "Otomatik Raporlama" }
  },
];

export function UseCasesSection() {
  return (
    <section className="relative py-20 bg-secondary/50 dark:bg-blue-950/30 backdrop-blur-sm overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Gerçek İş Senaryoları
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Başarılı AI otomasyon örnekleri ve somut sonuçlar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              index={index}
              variant="elevated"
            >
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">
                {useCase.description}
              </p>

              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{useCase.stats.label}</span>
                  <span className={`text-2xl font-bold bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}>
                    {useCase.stats.value}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

