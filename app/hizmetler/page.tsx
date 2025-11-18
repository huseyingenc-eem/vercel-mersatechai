"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Workflow,
  GitBranch,
  CheckCircle,
  Users,
  Calendar,
  ShoppingCart,
  Layers,
  Sparkles,
  ArrowRight,
  Zap,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";

type Sector = {
  key: string;
  title: string;
  problem: string;
  solution: string;
  details: string;
  bullets: string[];
  accent: string;
  icon: any;
};

const sectors: Sector[] = [
  {
    key: "ecommerce",
    title: "E‑Ticaret",
    problem: "Ziyaretçiler soru sorup yanıt alamıyor",
    solution: "7/24 ürün danışmanlığı + sepet hatırlatıcısı",
    details:
      "E‑ticaret siteleri için AI destekli ürün asistanı, kullanıcıyı doğru ürüne yönlendirir, stok ve varyant bilgisi sunar, ve terkedilmiş sepetlerde yeniden etkileşim kurar. Satın alma yolculuğunu otomatikleştirerek dönüşüm oranlarını artırır.",
    bullets: [
      "Ürün öneri motoru (context-aware)",
      "Terkedilmiş sepet hatırlatma akışları",
      "Sipariş takibi & durum güncellemeleri",
      "Kampanya/kupon tetikleme",
    ],
    accent: "from-emerald-500 to-teal-600",
    icon: ShoppingCart,
  },
  {
    key: "b2b",
    title: "B2B Şirketler",
    problem: "Lead'ler kaybolup gidiyor",
    solution: "Otomatik lead toplama + CRM entegrasyonu",
    details:
      "B2B satış döngüleri uzun ve karmaşıktır; AI tabanlı formlar ve sohbet akışları lead toplama sürecini otomatikleştirir, doğru alanları yakalar ve anında CRM'e iletir. Böylece satış ekipleri yüksek kaliteli leadlere odaklanır.",
    bullets: [
      "Kvalifikasyon & scoring otomasyonu",
      "Anlık CRM senkronizasyonu (HubSpot/Salesforce)",
      "E‑posta / bildirim tetiklemeleri",
      "Toplu raporlama ve etkinlik takibi",
    ],
    accent: "from-blue-500 to-indigo-600",
    icon: Users,
  },
  {
    key: "services",
    title: "Hizmet İşletmeleri",
    problem: "Rezervasyon takibi çok zor",
    solution: "WhatsApp üzerinden otomatik rezervasyon",
    details:
      "Randevu, rezervasyon ve hizmet takibi işletmeler için karmaşıktır. WhatsApp ve Telegram üzerinden çalışan akıllı asistan, rezervasyon alır, hatırlatmalar gönderir ve takvime entegre olur — insan hatasını azaltır.",
    bullets: [
      "Otomatik rezervasyon & iptal akışı",
      "Takvim entegrasyonu (Google/Outlook)",
      "Hatırlatıcı & follow‑up mesajları",
      "Çoklu dil desteği",
    ],
    accent: "from-violet-500 to-purple-600",
    icon: Calendar,
  },
  {
    key: "agencies",
    title: "Ajanslar",
    problem: "Çoklu müşteri takibi karmaşık",
    solution: "Merkezi lead toplama + raporlama",
    details:
      "Ajanslar birden fazla müşteriyle çalışırken süreçler dağılabilir. Merkezi dashboard ve otomatik raporlama ile tüm müşteri etkileşimlerini tek noktadan izleyin ve performans metriklerine göre hızlı aksiyon alın.",
    bullets: [
      "Müşteri bazlı raporlar",
      "Centralized lead havuzu",
      "Beyaz etiket entegrasyonları",
      "API & webhook desteği",
    ],
    accent: "from-indigo-500 to-blue-600",
    icon: Layers,
  },
  {
    key: "education",
    title: "Eğitim",
    problem: "Öğrenci soruları yanıtsız kalıyor",
    solution: "Otomatik soru‑cevap + kayıt sistemi",
    details:
      "Eğitim kurumları öğrencilerin sorularına hızlı cevap vererek bağlılığı artırır. Sınıf bazlı SSS, ödev hatırlatıcıları ve kayıt formları ile manuel işleri azaltın.",
    bullets: [
      "Sınıf/ödev hatırlatmaları",
      "Soru‑cevap botu (konu bazlı)",
      "Öğrenci kayıt otomasyonu",
      "Performans takibi ve geri bildirim",
    ],
    accent: "from-amber-500 to-orange-600",
    icon: MessageSquare,
  },
  {
    key: "pro",
    title: "Profesyonel Hizmetler",
    problem: "Randevu yönetimi manuel",
    solution: "Akıllı randevu + hatırlatma sistemi",
    details:
      "Hukuk, muhasebe ve danışmanlık gibi profesyonel hizmetlerde randevu ve belge akışı kritik. AI destekli asistan randevu planlar, ön bilgi toplar ve hatırlatmalarla no‑show'u azaltır.",
    bullets: [
      "Randevu planlama & senkronizasyon",
      "Doküman toplama akışları",
      "Ödeme hatırlatmaları",
      "Müşteri ön bilgi formları",
    ],
    accent: "from-rose-500 to-pink-600",
    icon: CheckCircle,
  },
];

const services = [
  {
    title: "Satış ve Müşteri Kazanımı",
    icon: MessageSquare,
    gradient: "from-emerald-500 to-teal-600",
    description:
      "Web sitenize gelen ziyaretçileri otomatik olarak karşılayın ve satış fırsatlarına dönüştürün.",
    features: [
      "7/24 ziyaretçi karşılama",
      "Otomatik soru-cevap",
      "Randevu yönetimi",
      "Potansiyel müşteri toplama",
      "Satış ekibine otomatik bildirim",
      "CRM entegrasyonu",
    ],
  },
  {
    title: "Müşteri Destek Otomasyonu",
    icon: Workflow,
    gradient: "from-blue-500 to-indigo-600",
    description:
      "Müşteri sorularını anında yanıtlayın ve destek ekibinizin yükünü azaltın.",
    features: [
      "Sık sorulan soruları otomatik yanıtlama",
      "Çok dilli destek",
      "Telegram & WhatsApp entegrasyonu",
      "Talep kategorizasyonu",
      "İnsan desteğine yönlendirme",
    ],
  },
  {
    title: "Özel İş Akışları",
    icon: GitBranch,
    gradient: "from-violet-500 to-purple-600",
    description:
      "İşinize özel tasarlanmış AI sohbet robotları ile her türlü iş sürecini otomatikleştirin.",
    features: [
      "Özelleştirilmiş konuşma akışları",
      "Sipariş alma ve takip",
      "Rezervasyon yönetimi",
      "Anket ve geri bildirim toplama",
    ],
  },
];

export default function HizmetlerPage() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-slate-900">
      {/* Hero — kullanmak üzere ortak PageHero component'ini kullanıyoruz */}
      <PageHero
        sectionBg="gradient"
        backgroundVariant="gradient"
        badge={{
          icon: <Sparkles className="w-4 h-4 text-blue-400" />,
          text: "AI Destekli Çözümler",
        }}
        title={
          <>
            Sektörünüze Özel
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Otomasyon Çözümleri
            </span>
          </>
        }
        description={
          "Her sektör için özelleştirilmiş AI otomasyon çözümleri — ziyaretçiden müşteriye, rezervasyondan CRM’e uçtan uca çözümler."
        }
        primaryCta={{ text: "Ücretsiz Danışmanlık", href: "/iletisim" }}
        secondaryCta={{ text: "Sektörleri İncele", href: "#sektorler" }}
      />

      {/* Sektör Kartları */}
      <div id="sektorler" className="py-20 bg-white dark:bg-slate-900">
        <Container className="space-y-32">
          {sectors.map((sector, idx) => (
            <motion.div
              key={sector.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Dekoratif gradient arka plan */}
              <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.1, 0.15, 0.1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${
                    idx % 2 === 0 ? "left-0" : "right-0"
                  } top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br ${
                    sector.accent
                  } rounded-full blur-[100px]`}
                />
              </div>

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* İçerik */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  {/* Icon badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-br ${
                        sector.accent
                      } shadow-lg`}
                    >
                      <sector.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {sector.key}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    {sector.title}
                  </h3>

                  {/* Problem/Solution */}
                  <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <span className="font-semibold">Sorun:</span> {sector.problem}
                    </p>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">
                      <span className="font-semibold">Çözüm:</span> {sector.solution}
                    </p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    {sector.details}
                  </p>

                  {/* Özellikler */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {sector.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/iletisim"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${sector.accent} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Özel Entegrasyon Talebi
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                    >
                      Daha Fazla Bilgi
                    </a>
                  </div>
                </div>

                {/* Görsel Kart */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    {/* Glow efekti */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        sector.accent
                      } rounded-3xl blur-2xl opacity-20`}
                    />

                    {/* Ana kart */}
                    <div className="relative p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${
                          sector.accent
                        } flex items-center justify-center shadow-lg`}
                      >
                        <sector.icon className="w-10 h-10 text-white" />
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-3">
                        {sector.solution}
                      </h4>

                      <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-6">
                        Hızlı kurulum, esnek entegrasyonlar ve ölçeklenebilir altyapı
                        ile kısa sürede yayına alınır.
                      </p>

                      {/* Mini metrikler */}
                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                            24/7
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            Aktif
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                            %85
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            Otomasyon
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                            5dk
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            Kurulum
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Container>
      </div>

      {/* Hizmetler Bölümü */}
      <div className="py-20 bg-slate-50 dark:bg-slate-950">
        <Container>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Kapsamlı Hizmet Portföyümüz
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                İş akışınızı otomatikleştirip zaman kazanın
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Glow efekti */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Özellikler */}
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="/iletisim"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                  >
                    Detaylı Bilgi
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Neden Bizi Seçmelisiniz */}
      <div className="py-20 bg-white dark:bg-slate-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Rakiplerimizden bizi ayıran özellikler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Hızlı Kurulum",
                desc: "5 dakikada kurulum, aynı gün yayına alma",
                gradient: "from-yellow-500 to-orange-600",
              },
              {
                icon: TrendingUp,
                title: "Ölçeklenebilir",
                desc: "İşiniz büyüdükçe birlikte büyüyoruz",
                gradient: "from-green-500 to-emerald-600",
              },
              {
                icon: Clock,
                title: "7/24 Destek",
                desc: "Her zaman yanınızdayız",
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                icon: CheckCircle,
                title: "Garanti",
                desc: "%100 memnuniyet garantisi",
                gradient: "from-purple-500 to-pink-600",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-500/30 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-4 shadow-lg`}
                >
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Final CTA */}
      <div className="relative py-24 overflow-hidden">
        {/* Gradient arka plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600" />

        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-extrabold mb-4"
            >
              İşiniz İçin Hazır mısınız?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-lg max-w-2xl mx-auto"
            >
              MersaTech ile süreçlerinizi otomatikleştirin, müşteri memnuniyetinizi artırın ve operasyonel maliyetleri düşürün. Ücretsiz keşif görüşmesi için bize ulaşın.
            </motion.p>

            <div className="flex justify-center gap-4">
              <a
                href="/iletisim"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Ücretsiz Keşif Çağrısı
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/fiyatlandirma"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Paketleri Gör
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

