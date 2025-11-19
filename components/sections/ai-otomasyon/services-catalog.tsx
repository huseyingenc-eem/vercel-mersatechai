"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Workflow,
    FileText,
    ScanText,
    Bot,
    Cpu,
    BarChart3,
    ArrowRight,
    Check,
    Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { H2, Lead } from "@/components/ui";
import { useIsMobile } from "@/hooks/use-mobile";
import { CardStack } from "@/components/ui/card-stack";

const services = [
    {
        id: 0,
        icon: Workflow,
        category: "AI Süreç Otomasyonu",
        description: "Operasyonlarınızı baştan sona otonom hale getiren AI tabanlı iş akışları.",
        features: [
            "Süreç analizi ve otomasyon tasarımı",
            "İnsan-onaylı (human-in-the-loop) workflow",
            "API destekli kurumsal entegrasyonlar"
        ],
        useCases: ["E-posta triyajı", "Fatura onayı", "İK işe alım süreci"],
        color: "from-blue-500 to-cyan-500",
        href: "/ai-otomasyon/ai-surec-otomasyonu",
    },
    {
        id: 1,
        icon: FileText,
        category: "Doküman Dönüştürme",
        description: "Her türlü dokümanı yapay zeka ile okunabilir ve kullanılır hale getirme.",
        features: [
            "PDF → Word, Excel, JSON dönüşümü",
            "Görüntüden metin çıkarma (OCR)",
            "Kurumsal doküman standardizasyonu"
        ],
        useCases: ["Arşiv dijitalleştirme", "Sözleşme analizi", "Akademik araştırma"],
        color: "from-purple-500 to-pink-500",
        href: "/ai-otomasyon/dokuman-donusturme",
    },
    {
        id: 2,
        icon: ScanText,
        category: "Otomatik Veri Çıkarma",
        description: "Fatura, makbuz, sözleşme gibi dokümanlardan otomatik veri çıkarma.",
        features: [
            "OCR + LLM destekli veri çıkarma",
            "Tablo tespiti ve alan tanıma",
            "API aracılığıyla CRM/ERP'ye aktarma"
        ],
        useCases: ["Gider yönetimi", "Müşteri bilgi girişi", "Lojistik irsaliye işleme"],
        color: "from-green-500 to-emerald-500",
        href: "/ai-otomasyon/otomatik-veri-cikarma",
    },
    {
        id: 3,
        icon: Cpu,
        category: "RPA + AI İş Akışları",
        description: "Klasik RPA'nın sınırlarını genişleten yapay zeka tabanlı robotlar.",
        features: [
            "Web otomasyonu ve mail okuma",
            "Excel / Google Sheet otomasyonu",
            "AI destekli karar mekanizmaları"
        ],
        useCases: ["Rakip fiyat takibi", "Otomatik sipariş girişi", "Periyodik rapor oluşturma"],
        color: "from-orange-500 to-red-500",
        href: "/ai-otomasyon/rpa-ai-is-akislari",
    },
    {
        id: 4,
        icon: Bot,
        category: "Otomasyon Botları",
        description: "7/24 çalışan, hata yapmayan dijital işçilerinizi oluşturuyoruz.",
        features: [
            "Veri toplama ve raporlama botları",
            "Mesajlaşma ve CRM botları",
            "Özelleştirilmiş görev botları"
        ],
        useCases: ["Sosyal medya yönetimi", "Lead toplama botları", "İç bildirim sistemleri"],
        color: "from-indigo-500 to-purple-500",
        href: "/ai-otomasyon/otomasyon-botlari",
    },
    {
        id: 5,
        icon: BarChart3,
        category: "Otomatik Raporlama",
        description: "Tüm verileri anında toplayan, sürekli güncel dashboard'lar.",
        features: [
            "KPI ve OKR takip sistemleri",
            "Otomatik excel/ppt/pdf raporları",
            "Power BI & Data Studio entegrasyonu"
        ],
        useCases: ["Günlük satış raporları", "Haftalık pazarlama analizi", "Aylık finansal özetler"],
        color: "from-yellow-500 to-orange-500",
        href: "/ai-otomasyon/otomatik-raporlama",
    },
];

// CardStack için sadeleştirilmiş içerik.
// Not: CardStack kendi container'ını (beyaz kutu) sağladığı için burada sadece içeriği veriyoruz.
// Ekstra border, shadow veya bg-color kaldırıldı.
const stackItems = services.map((service) => ({
    id: service.id,
    content: (
        <div className="h-full flex flex-col justify-between">
            {/* Arka Plan Gradient Glow (Hafifçe) */}
            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.color} opacity-10 blur-3xl rounded-full pointer-events-none`} />

            <div className="relative z-10">
                {/* İkon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-md`}>
                    <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                    {service.category}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                </p>

                <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2 flex items-center gap-1">
                    <Lightbulb className="w-3 h-3 text-yellow-500" />
                    Kullanım Alanları
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {service.useCases.slice(0, 2).map((useCase, idx) => (
                        <span
                            key={idx}
                            className="px-2 py-1 bg-neutral-50 dark:bg-neutral-800 rounded text-xs text-neutral-600 dark:text-neutral-300 border border-neutral-100 dark:border-neutral-700"
                        >
                            {useCase}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    ),
}));

// Desktop Tekil Kart Bileşeni (Değişiklik yok)
const ServiceCard = ({
                         service,
                         index,
                         variant = "elevated",
                         className,
                         isActive,
                         href
                     }: {
    service: typeof services[0],
    index: number,
    variant?: "elevated" | "flat",
    className?: string,
    isActive?: boolean,
    href?: string
}) => {
    const Component = href ? 'a' : 'div';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn("h-full", className)}
        >
            <Component
                {...(href ? { href } : {})}
                className={cn(
                    "group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 p-6 block h-full flex flex-col",
                    "border border-neutral-200 dark:border-neutral-800",
                    variant === "elevated" && "hover:shadow-2xl hover:border-primary/20 transition-all duration-500",
                    href && "cursor-pointer"
                )}
            >
                <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br",
                    service.color
                )} />

                <div className="relative z-10 flex-grow">
                    <div className={cn(
                        "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500",
                        service.color
                    )}>
                        <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-primary transition-colors">
                        {service.category}
                    </h3>

                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm leading-relaxed">
                        {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 pt-4 mt-auto">
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        Detaylı Bilgi
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </Component>
        </motion.div>
    );
};

export function ServicesSection() {
    const [mounted, setMounted] = useState(false);
    const isMobileState = useIsMobile();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Container className="py-24 bg-neutral-50/50 dark:bg-neutral-950/50">
            <div className="text-center mb-12 md:mb-16 px-4">
                <H2 className="mb-4 text-3xl md:text-4xl">AI Otomasyon Hizmetleri</H2>
                <Lead className="max-w-2xl mx-auto">
                    İş süreçlerinizi yapay zeka ile modernize edin, maliyetleri düşürün ve verimliliği artırın.
                </Lead>
            </div>

            {isMobileState ? (
                /* MOBİL GÖRÜNÜM: Sadece CardStack, temiz ve sade */
                <div className="flex items-center justify-center w-full py-4">
                    <CardStack items={stackItems} />
                </div>
            ) : (
                /* MASAÜSTÜ GÖRÜNÜM: Grid */
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                            href={service.href}
                        />
                    ))}
                </div>
            )}
        </Container>
    );
}