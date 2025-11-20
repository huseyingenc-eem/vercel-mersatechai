"use client";

import React from "react";
import { PageHero } from "@components/shared/page-hero";
import { Container } from "@components/shared/container";
import { H2, Lead, Button } from "@components/ui";
import {
  BrainCircuit,
  Table2,
  Waypoints,
  CheckCircle2,
  Timer,
  TrendingDown,
  ShieldCheck,
  Sparkles,
  Lock,
  Database
} from "lucide-react";

export default function OtomatikVeriCikarmaPage() {
  // Horizontal scroll kartları
  const features = [
    {
      title: "OCR + LLM Destekli Veri Çıkarma",
      description: "Geleneksel OCR sadece okur; bizim hibrit yapımız anlar, yorumlar ve doğrular. Fatura, fiş, sözleşme - her türlü dokümanı %95+ doğrulukla işleriz.",
      badge: "AI Powered",
      icon: <BrainCircuit className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-center">
              <BrainCircuit className="w-8 h-8 text-primary mx-auto mb-2" />
              <h5 className="font-bold text-sm mb-1">Akıllı Analiz</h5>
              <p className="text-xs text-muted-foreground">
                Bağlam anlayan AI
              </p>
            </div>
            <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-center">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
              <h5 className="font-bold text-sm mb-1">Çok Dilli</h5>
              <p className="text-xs text-muted-foreground">
                TR, EN, DE, AR
              </p>
            </div>
            <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-center">
              <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
              <h5 className="font-bold text-sm mb-1">%95+ Doğruluk</h5>
              <p className="text-xs text-muted-foreground">
                Yüksek başarı
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Desteklenen Belgeler:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium">
                Faturalar
              </span>
              <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium">
                Sözleşmeler
              </span>
              <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium">
                Teklifler
              </span>
              <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium">
                İrsaliyeler
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Tablo Tespiti ve Alan Tanıma",
      description: "Karmaşık, hizasız veya çok sayfalı tabloları satır-sütun mantığında kusursuz ayrıştırır. Birleşik hücreler, dipnotlar ve kalem bazlı veri çıkarımı.",
      badge: "Advanced",
      icon: <Table2 className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />,
      content: (
        <div className="space-y-6">
          <div className="p-5 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800/50">
            <Table2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-3" />
            <h5 className="font-bold text-base mb-3">Akıllı Tablo Analizi</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Satır/Sütun başlıklarının otomatik etiketlenmesi</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Birleşik hücre ve çok satırlı açıklamaların doğru işlenmesi</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Tablo dışı alanlarla tablo içi verinin akıllı ayrımı</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Kalem Bazlı Veri Çıkarımı:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-full font-medium">
                Ürün Kodu
              </span>
              <span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-full font-medium">
                Miktar
              </span>
              <span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-full font-medium">
                Birim Fiyat
              </span>
              <span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-full font-medium">
                İskonto
              </span>
              <span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-full font-medium">
                Toplam
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "API ile ERP/CRM Entegrasyonu",
      description: "Veri çıkarmak yetmez; veriyi SAP, Logo, Netsis veya CRM sisteminize otomatik işliyoruz. Güvenlik kontrolleriyle tam entegrasyon.",
      badge: "Integration",
      icon: <Waypoints className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-card rounded-xl border border-border">
              <Database className="w-10 h-10 text-orange-500 mb-3" />
              <h5 className="font-bold text-sm mb-2">ERP Sistemleri</h5>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• SAP</p>
                <p>• Logo</p>
                <p>• Netsis</p>
                <p>• Nebim</p>
                <p>• Oracle</p>
              </div>
            </div>
            <div className="p-4 bg-card rounded-xl border border-border">
              <Waypoints className="w-10 h-10 text-orange-500 mb-3" />
              <h5 className="font-bold text-sm mb-2">CRM Platformları</h5>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• HubSpot</p>
                <p>• Salesforce</p>
                <p>• Zoho</p>
                <p>• Pipedrive</p>
                <p>• Freshworks</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800/50">
            <div className="flex items-start gap-3">
              <Lock className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm text-orange-800 dark:text-orange-300 mb-1">
                  Güvenlik & Kontrol
                </h5>
                <p className="text-xs text-muted-foreground">
                  Hatalı veriler için doğrulama mekanizması çalışır. Şüpheli durumlarda
                  &quot;İnsan Onayı&quot;na düşürülür. Tam loglama ve audit trail sağlanır.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Stats
  const stats = [
    {
      label: "Manuel Hata Oranı",
      value: "%3 – %10",
      sub: "İnsan kaynaklı hatalar",
      icon: <TrendingDown className="w-5 h-5 text-destructive" />,
      trend: "negative"
    },
    {
      label: "AI Hata Oranı",
      value: "%0.5 – %2",
      sub: "Sürekli öğrenen model",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      trend: "positive"
    },
    {
      label: "İşlem Süresi",
      value: "< 10 Sn",
      sub: "Manuel: 3-5 dakika",
      icon: <Timer className="w-5 h-5 text-primary" />,
      trend: "neutral"
    },
    {
      label: "Yıllık Tasarruf",
      value: "%40 – %70",
      sub: "Operasyonel maliyetlerde",
      icon: <CheckCircle2 className="w-5 h-5 text-purple-500" />,
      trend: "positive"
    }
  ];

  return (
    <>
      <PageHero
        title="Otomatik Veri Çıkarma (IDP)"
        description="Dokümanları sadece okuyan değil, anlayan teknoloji. Faturalarınızı, sözleşmelerinizi ve formlarınızı saniyeler içinde veriye dönüştürün."
        backgroundVariant="minimal"
      />

      {/* GİRİŞ */}
      <Container sectionBg="transparent" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <H2>Manuel Veri Girişine Son</H2>
          <Lead theme="muted" className="mt-4">
            Fatura, makbuz, sözleşme veya irsaliye... Manuel veri girişi hem zaman kaybıdır hem de hata
            riskini artırır. MersaTech, dokümanları yalnızca okuyan değil, aynı zamanda içeriği anlayan ve iş
            akışlarınıza (ERP/CRM) uygun şekilde yapılandıran bir altyapı sunar.
          </Lead>
        </div>
      </Container>

      {/* HORIZONTAL SCROLL - ANA ÖZELLİKLER */}
      {/* <HorizontalScrollCards
        cards={features}
        title="Teknolojik Yetenekler"
        subtitle="OCR, LLM ve Entegrasyon ile uçtan uca çözüm. Aşağı kaydırarak keşfedin."
        className="bg-gradient-to-b from-background via-slate-50/50 dark:via-slate-900/50 to-background"
      /> */}

      {/* İSTATİSTİKLER */}
      <Container sectionBg="transparent" className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <H2>Neden Otomatik Veri Çıkarma?</H2>
            <Lead theme="muted" className="mt-4">Rakamlarla dönüşümün etkisi</Lead>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 md:p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-secondary rounded-lg group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    stat.trend === 'positive' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' :
                    stat.trend === 'negative' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                    'bg-primary/10 text-primary'
                  }`}>
                    {stat.trend === 'negative' ? 'Riskli' : 'Avantaj'}
                  </span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground/60 mt-1">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* İŞ AKIŞI ADIMLARI */}
      <Container sectionBg="slate" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <H2>Nasıl Çalışır?</H2>
            <Lead theme="muted" className="mt-4">5 adımda dokümanlardan veriye</Lead>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: "01", title: "OCR Okuması", desc: "Ham metin görüntüden çıkarılır" },
              { num: "02", title: "LLM Anlamlandırma", desc: "AI, metnin ne olduğunu anlar" },
              { num: "03", title: "Yapılandırma", desc: "Veri JSON/XML formatına ayrılır" },
              { num: "04", title: "Doğrulama", desc: "Matematiksel kontroller yapılır" },
              { num: "05", title: "Entegrasyon", desc: "Veri ERP/CRM'e kaydedilir" }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    {item.num}
                  </div>
                  <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>

                {/* Connector line (desktop only) */}
                {idx < 4 && (
                  <div className="hidden md:block absolute top-12 left-[calc(100%-1rem)] w-8 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* CTA */}
      <Container sectionBg="transparent" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-purple-600 dark:from-primary/90 dark:to-purple-700 p-8 md:p-12 text-center shadow-2xl shadow-primary/20">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Veri Girişini Robota Bırakın
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Departmanlarınız arası veri akışını hızlandırmak ve hataları sıfıra indirmek için
                ücretsiz bir demo çalışması yapalım.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="font-semibold bg-white text-primary hover:bg-white/90"
                >
                  Demo Talep Et
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold border-white/30 text-white hover:bg-white/10"
                >
                  Örnek Belge Test Et
                </Button>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </Container>
    </>
  );
}
