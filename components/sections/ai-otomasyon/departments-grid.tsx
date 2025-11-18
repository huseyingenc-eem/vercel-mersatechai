"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Headphones,
  DollarSign,
  Package,
  ArrowRight
} from "lucide-react";
import { Card } from "@components/ui";

const departments = [
  {
    icon: TrendingUp,
    title: "Satış, Pazarlama ve Müşteri Yönetimi",
    description: "Potansiyel müşteri takibi, e-posta kampanyaları, sosyal medya planlaması, CRM güncellemeleri, potansiyel müşteri puanlaması",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Lead takibi ve puanlama",
      "Otomatik e-posta kampanyaları",
      "Sosyal medya yönetimi",
      "CRM entegrasyonu",
    ],
  },
  {
    icon: Users,
    title: "İşe Alımdan Eğitime Tüm İnsan Kaynakları",
    description: "Çalışanların işe alımı, belge toplama, eğitim programları",
    color: "from-purple-500 to-pink-500",
    features: [
      "Otomatik işe alım süreci",
      "Dijital belge yönetimi",
      "Eğitim takip sistemi",
      "Performans değerlendirme",
    ],
  },
  {
    icon: Headphones,
    title: "Müşteri Destek Süreçlerinizi Hızlandırın",
    description: "Bilet ataması, yanıt otomasyonu, müşteri geri bildirimi",
    color: "from-green-500 to-emerald-500",
    features: [
      "Akıllı bilet yönlendirme",
      "Otomatik yanıt sistemi",
      "Geri bildirim analizi",
      "7/24 destek botu",
    ],
  },
  {
    icon: DollarSign,
    title: "Finansal Süreçlerinizi Kolaylaştırın",
    description: "Fatura işleme, gider takibi, finansal raporlama, bordro yönetimi",
    color: "from-yellow-500 to-orange-500",
    features: [
      "Otomatik fatura işleme",
      "Akıllı gider takibi",
      "Gerçek zamanlı raporlama",
      "Bordro otomasyonu",
    ],
  },
  {
    icon: Package,
    title: "Envanterden Teslimata Operasyonlar",
    description: "Envanter yönetimi, tedarik zinciri optimizasyonu, görev otomasyonu",
    color: "from-indigo-500 to-purple-500",
    features: [
      "Akıllı stok yönetimi",
      "Tedarik zinciri optimizasyonu",
      "Otomatik sipariş takibi",
      "Lojistik koordinasyonu",
    ],
  },
];

export function DepartmentsGrid() {
  return (
    <section className="relative py-20 bg-background/80 dark:bg-neutral-950/80 backdrop-blur-sm overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Her Departman için{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              AI Çözümleri
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Organizasyonunuzun her köşesinde yapay zeka ile verimliliği artırın
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {departments.map((dept, index) => (
            <Card
              key={index}
              icon={dept.icon}
              title={dept.title}
              description={dept.description}
              index={index}
              variant="elevated"
            >
              <div className="space-y-3 mb-6">
                {dept.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${dept.color}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300 group/btn">
                Detaylı İncele
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-xl">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Departmanınız için özel çözüm mü arıyorsunuz?
              </h3>
              <p className="text-muted-foreground">
                Uzmanlarımızla görüşün ve size özel AI çözümleri keşfedin
              </p>
            </div>
            <button className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2 group">
              İletişime Geç
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

