"use client";

import React, {useEffect, useState} from "react";
import {PageHero} from "@components/shared/page-hero";
import {Container} from "@components/shared/container";
import {H2, Lead, Button, ExpandableCardGrid} from "@components/ui";
import {
    BrainCircuit,
    Table2,
    Waypoints,
    CheckCircle2,
    Timer,
    TrendingDown,
    ShieldCheck
} from "lucide-react";

export default function OtomatikVeriCikarmaPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // --- 1. ANA HİZMETLER (ExpandableCardGrid) ---
    const services = [
        {
            title: "OCR + LLM Destekli Veri Çıkarma",
            description: "Geleneksel OCR sadece okur; MersaTech'in hibrit yapısı anlar, yorumlar ve doğrular.",
            src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
            icon: <BrainCircuit className="w-6 h-6 text-indigo-500"/>,
            content: () => (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-foreground mb-2">Hibrit Yaklaşım Farkı</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                            Klasik sistemler şablon bazlıdır ve format değişince bozulur. Bizim sistemimiz ise belgenin
                            bağlamını anlar.
                        </p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li><strong className="text-foreground">Fatura/Fiş:</strong> Tutar, tarih, KDV, tedarikçi
                                tespiti.
                            </li>
                            <li><strong className="text-foreground">Sözleşme:</strong> Tarihler, taraflar ve özel
                                koşullar.
                            </li>
                            <li><strong className="text-foreground">Teklif:</strong> PO numarası, teslimat şartları.
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div
                            className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-800/30">
                            <h5 className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">Avantajlar</h5>
                            <ul className="text-xs text-muted-foreground mt-1 space-y-1">
                                <li>• Yamuk/gölgeli çekimlerde yüksek başarı</li>
                                <li>• Çok dilli destek (TR, EN, DE, AR)</li>
                                <li>• %95+ Doğruluk oranı</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Tablo Tespiti ve Alan Tanıma",
            description: "Karmaşık, hizasız veya çok sayfalı tabloları satır-sütun mantığında kusursuz ayrıştırır.",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
            icon: <Table2 className="w-6 h-6 text-emerald-500"/>,
            content: () => (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-foreground mb-2">Akıllı Tablo Analizi</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Satır/Sütun ayrımı ve başlıkların otomatik etiketlenmesi.</li>
                            <li>Birleşik hücreler ve çok satırlı açıklamaların doğru işlenmesi.</li>
                            <li>Tablo dışı alanlar (dipnot, kaşe) ile tablo içi verinin ayrımı.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground mb-2">Kalem Bazlı Çıkarım</h4>
                        <div className="flex gap-2 flex-wrap text-xs">
                            <span
                                className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded border border-emerald-200 dark:border-emerald-800/50">Ürün Kodu</span>
                            <span
                                className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded border border-emerald-200 dark:border-emerald-800/50">Miktar</span>
                            <span
                                className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded border border-emerald-200 dark:border-emerald-800/50">Birim Fiyat</span>
                            <span
                                className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded border border-emerald-200 dark:border-emerald-800/50">İskonto</span>
                            <span
                                className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded border border-emerald-200 dark:border-emerald-800/50">Satır Toplamı</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "API Aracılığıyla CRM/ERP Entegrasyonu",
            description: "Veri çıkarmak yetmez; veriyi SAP, Logo, Netsis veya CRM sisteminize otomatik işliyoruz.",
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
            icon: <Waypoints className="w-6 h-6 text-orange-500"/>,
            content: () => (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-foreground mb-2">Entegrasyon Katmanı</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li><strong className="text-foreground">ERP:</strong> SAP, Logo, Netsis, Nebim, Oracle</li>
                            <li><strong className="text-foreground">CRM:</strong> HubSpot, Salesforce, Zoho</li>
                            <li><strong className="text-foreground">Finans:</strong> Fatura ve cari kart oluşturma</li>
                        </ul>
                    </div>
                    <div
                        className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-800/50">
                        <h4 className="font-bold text-sm text-orange-800 dark:text-orange-300 mb-1">Güvenlik &
                            Kontrol</h4>
                        <p className="text-xs text-muted-foreground">
                            Hatalı veriler için doğrulama mekanizması çalışır. Şüpheli durumlarda &quot;İnsan
                            Onayı&quot;na düşürülür, onaylanan veri sisteme girer. Tam loglama ve audit trail sağlanır.
                        </p>
                    </div>
                </div>
            ),
        },
    ];

    // --- 2. İŞ AKIŞI ADIMLARI (Timeline Görünümü) ---
    const workflowSteps = [
        {
            step: "01",
            title: "OCR Okuması",
            desc: "Ham metin görüntüden çıkarılır."
        },
        {
            step: "02",
            title: "LLM Anlamlandırma",
            desc: "AI, metnin ne olduğunu (Fatura? Sözleşme?) anlar."
        },
        {
            step: "03",
            title: "Yapılandırma",
            desc: "Veri JSON/XML formatına ve doğru alanlara ayrılır."
        },
        {
            step: "04",
            title: "Doğrulama",
            desc: "Matematiksel kontroller ve güven skoru analizi yapılır."
        },
        {
            step: "05",
            title: "Entegrasyon",
            desc: "Onaylanan veri ERP/CRM sistemine otomatik kaydedilir."
        }
    ];

    // --- 3. İSTATİSTİKLER (Feature Grid / Stats) ---
    const stats = [
        {
            label: "Hata Oranı (Manuel)",
            value: "%3 – %10",
            sub: "İnsan kaynaklı hatalar",
            icon: <TrendingDown className="w-5 h-5 text-destructive"/>,
            trend: "negative"
        },
        {
            label: "Hata Oranı (MersaTech AI)",
            value: "%0.5 – %2",
            sub: "Sürekli öğrenen model",
            icon: <ShieldCheck className="w-5 h-5 text-success"/>,
            trend: "positive"
        },
        {
            label: "İşlem Süresi",
            value: "< 10 Saniye",
            sub: "Manuel: 3-5 dakika",
            icon: <Timer className="w-5 h-5 text-primary"/>,
            trend: "neutral"
        },
        {
            label: "Yıllık Tasarruf",
            value: "%40 – %70",
            sub: "Operasyonel maliyetlerde",
            icon: <CheckCircle2 className="w-5 h-5 text-purple-500"/>,
            trend: "positive"
        }
    ];

    if (!mounted) return null;

    return (
        <>
            <PageHero
                title="Otomatik Veri Çıkarma (IDP)"
                description="Dokümanları sadece okuyan değil, anlayan teknoloji. Faturalarınızı, sözleşmelerinizi ve formlarınızı saniyeler içinde veriye dönüştürün."
                backgroundVariant="minimal"
            />

            {/* GİRİŞ */}
            <Container sectionBg="transparent" className="py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <H2>Manuel Veri Girişine Son</H2>
                    <Lead theme="muted" className="mt-4">
                        Fatura, makbuz, sözleşme veya irsaliye... Manuel veri girişi hem zaman kaybıdır hem de hata
                        riskini artırır.
                        MersaTech, dokümanları yalnızca okuyan değil, aynı zamanda içeriği anlayan ve iş akışlarınıza
                        (ERP/CRM) uygun şekilde yapılandıran bir altyapı sunar.
                    </Lead>
                </div>
            </Container>

            {/* TIMELINE (İŞ AKIŞI) */}
            <Container sectionBg="transparent" className="pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:grid md:grid-cols-5 gap-6">
                        {workflowSteps.map((item, idx) => (
                            <div key={idx} className="relative p-4 rounded-xl flex flex-col items-center text-center group transition-colors shadow-sm">
                                {/* Number inside badge (replaces large background number) */}
                                <div className="w-8 h-8 rounded-full bg-primary mb-3 relative z-10 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_10px_-3px_rgba(37,99,235,0.5)]">
                                    {item.step}
                                </div>

                                {/* Mobile: vertical connector below badge to next step */}
                                {idx !== workflowSteps.length - 1 && (
                                    <div className="md:hidden w-[2px] h-6 bg-border mx-auto my-2" />
                                )}

                                <h4 className="font-bold text-foreground text-sm sm:text-base mb-1 relative z-10">{item.title}</h4>
                                <p className="text-xs text-muted-foreground relative z-10">{item.desc}</p>

                                {/* Desktop: horizontal connectors centered to badge middle */}
                                {idx !== 0 && (
                                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[2px] bg-border -z-0" />
                                )}
                                {idx !== workflowSteps.length - 1 && (
                                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-1/2 h-[2px] bg-border -z-0" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* ANA ÖZELLİKLER (Expandable Cards) */}
            <Container sectionBg="slate" className="py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <H2>Teknolojik Yetenekler</H2>
                        <Lead theme="muted" className="mt-4">OCR, LLM ve Entegrasyon üçlüsüyle uçtan uca çözüm.</Lead>
                    </div>
                    <ExpandableCardGrid
                        cards={services.map(s => ({
                            title: s.title,
                            description: s.description,
                            src: s.src,
                            content: s.content
                        }))}
                    />
                </div>
            </Container>

            {/* NEDEN KULLANMALI? (Stats Grid) */}
            <Container sectionBg="transparent" className="py-20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <H2>Neden Otomatik Veri Çıkarma?</H2>
                        <Lead theme="muted" className="mt-4">Rakamlarla dönüşümün etkisi.</Lead>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="p-4 sm:p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-secondary rounded-lg">
                                        {stat.icon}
                                    </div>
                                    <span className={`text-[10px] sm:text-xs font-medium px-2 py-1 rounded-full ${
                                        stat.trend === 'positive' ? 'bg-success/10 text-success' :
                                            stat.trend === 'negative' ? 'bg-destructive/10 text-destructive' :
                                                'bg-primary/10 text-primary'
                                    }`}>
                           {stat.trend === 'negative' ? 'Riskli' : 'Avantaj'}
                        </span>
                                </div>
                                <div className="text-3xl font-bold text-foreground mb-1">
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

            {/* CTA */}
            <Container sectionBg="slate" className="py-20">
                <div className="max-w-4xl mx-auto">
                    {/* outer wrapper provides a subtle border/ring in dark mode if needed */}
                    <div className="relative overflow-hidden rounded-3xl">
                        {/* Background adapts for light and dark: bright gradient in light, toned/dark gradient in dark */}
                        <div
                            className="bg-gradient-to-r from-primary to-purple-600 dark:from-primary/90 dark:to-purple-700 p-10 rounded-3xl text-primary-foreground dark:text-white text-center shadow-xl shadow-primary/20 dark:shadow-none">
                            <h2 className="text-3xl font-bold mb-4">Veri Girişini Robota Bırakın</h2>
                            <p className="mb-8 text-lg max-w-2xl mx-auto text-primary-foreground/90 dark:text-white/90">
                                Departmanlarınız arası veri akışını hızlandırmak ve hataları sıfıra indirmek için
                                ücretsiz bir demo çalışması yapalım.
                            </p>

                            <div className="flex justify-center gap-4">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="font-bold px-6 py-3 bg-white text-black hover:bg-slate-100 dark:bg-primary dark:text-white dark:hover:bg-primary/90"
                                >
                                    Demo Talep Et
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="px-6 py-3 border-black/20 text-black hover:bg-black/5 dark:border-white/30 dark:text-white dark:hover:bg-white/10"
                                >
                                    Örnek Belge Test Et
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
}