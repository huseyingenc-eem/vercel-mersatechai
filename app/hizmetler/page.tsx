"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@components/layout/navbar";
import { Footer } from "@components/layout/footer";
import { MessageSquare, Workflow, GitBranch, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Satış ve Müşteri Kazanımı",
    icon: MessageSquare,
    gradient: "from-green-400 to-emerald-600",
    description: "Web sitenize gelen ziyaretçileri otomatik olarak karşılayın ve satış fırsatlarına dönüştürün.",
    features: [
      "7/24 ziyaretçi karşılama",
      "Otomatik soru-cevap",
      "Randevu yönetimi",
      "Potansiyel müşteri toplama",
      "Satış ekibine otomatik bildirim",
      "CRM entegrasyonu"
    ],
    useCases: [
      "E-ticaret siteleri için ürün danışmanlığı",
      "Hizmet işletmeleri için randevu alma",
      "B2B şirketler için demo talep toplama"
    ]
  },
  {
    title: "Müşteri Destek Otomasyonu",
    icon: Workflow,
    gradient: "from-blue-400 to-cyan-600",
    description: "Müşteri sorularını anında yanıtlayın ve destek ekibinizin yükünü %80 azaltın.",
    features: [
      "Sık sorulan soruları otomatik yanıtlama",
      "Çok dilli destek",
      "Telegram & WhatsApp entegrasyonu",
      "Talep kategorizasyonu",
      "İnsan desteğine yönlendirme",
      "Konuşma geçmişi kaydı"
    ],
    useCases: [
      "Sipariş durumu sorgulama",
      "Ürün/hizmet bilgilendirme",
      "Teknik destek ilk seviye",
      "İade ve değişim süreçleri"
    ]
  },
  {
    title: "Özel İş Akışları",
    icon: GitBranch,
    gradient: "from-purple-400 to-pink-600",
    description: "İşinize özel tasarlanmış AI sohbet robotları ile her türlü iş sürecini otomatikleştirin.",
    features: [
      "Özelleştirilmiş konuşma akışları",
      "Sipariş alma ve takip",
      "Rezervasyon yönetimi",
      "Anket ve geri bildirim toplama",
      "Ödeme entegrasyonu",
      "Kendi sistemlerinizle entegrasyon"
    ],
    useCases: [
      "Restoran rezervasyon sistemi",
      "Otel oda rezervasyonu",
      "Kurye sipariş alma",
      "Anket ve feedback toplama",
      "Appointment booking"
    ]
  }
];

export default function HizmetlerPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              İşinize özel AI chatbot çözümleri ile müşteri deneyimini otomatikleştirin
            </p>
          </motion.div>

          {/* Services Detail */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* Service Info */}
                <div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-neutral-300 mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Kullanım Senaryoları
                  </h3>
                  <div className="space-y-4">
                    {service.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mt-2`}></div>
                        <p className="text-neutral-300">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              İşiniz İçin Doğru Çözüm Hangisi?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Ücretsiz görüşme için bizimle iletişime geçin
            </p>
            <a
              href="/iletisim"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all"
            >
              İletişime Geçin
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
