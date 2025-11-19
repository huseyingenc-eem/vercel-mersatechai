"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Headphones,
  DollarSign,
  Package,
  ArrowRight,
  Check
} from "lucide-react";
import { ExpandableCardGrid } from "@components/ui/cards";

const departmentData = [
  {
    icon: TrendingUp,
    title: "Satış, Pazarlama ve Müşteri Yönetimi",
    description: "Müşteri yönetimi ve kampanya otomasyonu.",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Potansiyel müşteri takibi ve puanlama",
      "Otomatik e-posta ve sosyal medya kampanyaları",
      "CRM sistemlerinin otomatik güncellenmesi",
      "Pazar trend analizi ve raporlama",
    ],
  },
  {
    icon: Users,
    title: "İşe Alımdan Eğitime Tüm İnsan Kaynakları",
    description: "İşe alımdan eğitime tüm İK süreçleri.",
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-purple-500 to-pink-500",
    features: [
      "Aday başvuru takip sistemi (ATS) otomasyonu",
      "Yeni çalışanlar için dijital belge toplama",
      "Otomatik eğitim atama ve takip sistemi",
      "Performans değerlendirme ve geri bildirim döngüleri",
    ],
  },
  {
    icon: Headphones,
    title: "Müşteri Destek Süreçlerinizi Hızlandırın",
    description: "Destek taleplerini hızlandırın ve çözün.",
    src: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-green-500 to-emerald-500",
    features: [
      "Gelen talepleri akıllı bilet sistemine yönlendirme",
      "Sık sorulan sorular için 7/24 otomatik yanıt botu",
      "Müşteri geri bildirimlerini duygu analizi ile raporlama",
      "Canlı destek yoğunluğunu tahmin etme",
    ],
  },
  {
    icon: DollarSign,
    title: "Finansal Süreçlerinizi Kolaylaştırın",
    description: "Finansal süreçlerinizi otomatikleştirin.",
    src: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-yellow-500 to-orange-500",
    features: [
      "Gelen faturaların otomatik işlenmesi ve onayı",
      "Akıllı gider takibi ve kategori bazlı raporlama",
      "Gerçek zamanlı finansal dashboard'lar",
      "Bordro ve ödeme süreçlerinin otomasyonu",
    ],
  },
    {
    icon: Package,
    title: "Envanterden Teslimata Operasyonlar",
    description: "Envanterden teslimata tüm operasyonlar.",
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-indigo-500 to-purple-500",
    features: [
      "Akıllı stok ve envanter yönetimi",
      "Tedarik zinciri ve talep tahmini optimizasyonu",
      "Otomatik sipariş takibi ve müşteri bilgilendirme",
      "Rota optimizasyonu ve lojistik koordinasyonu",
    ],
  },
];

const cards = departmentData.map(dept => ({
    title: dept.title,
    description: dept.description,
    src: dept.src,
    content: () => (
        <div className="space-y-4">
            {dept.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-1 flex-shrink-0 bg-gradient-to-r ${dept.color} bg-clip-text text-transparent`} />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{feature}</span>
                </div>
            ))}
        </div>
    )
}));

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

        <ExpandableCardGrid cards={cards} />

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
