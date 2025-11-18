"use client";
import React from "react";
import {PageHero} from "@/components/shared/page-hero";
import {Card} from "@/components/ui/core/card";
import {Sparkles, Zap, Users, TrendingUp} from "lucide-react";

export function HeroSection() {
    const stats = [
        {icon: Zap, value: "7/24", label: "Kesintisiz Destek"},
        {icon: TrendingUp, value: "%80", label: "Verimlilik Artışı"},
        {icon: Users, value: "500+", label: "Mutlu Müşteri"},
        {icon: Sparkles, value: "3x", label: "Daha Hızlı"},
    ];

    const title = [
        { text: "İş" },
        { text: "Süreçlerinizi" },
        { text: "Yapay" },
        { text: "Zeka" },
        { text: "ile" },
        { text: "Dönüştürün", className: "text-primary" },
    ];

    return (
        <PageHero
            id="hero"
            badge={{
                icon: <Sparkles className="w-4 h-4"/>,
                text: "AI-Powered Business Automation",
            }}
            title={title}
            description="Yapay zeka destekli çözümlerimizle iş süreçlerinizi otomatikleştirin, verimliliği %80 artırın ve maliyetleri düşürün"
            primaryCta={{
                text: "Ücretsiz Demo",
                href: "/iletisim",
            }}
            secondaryCta={{
                text: "Hizmetlerimizi İnceleyin",
                href: "/hizmetler",
            }}
            backgroundVariant="gradient"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
                {stats.map((stat, index) => (
                    <Card
                        key={index}
                        icon={stat.icon}
                        title={stat.value}
                        description={stat.label}
                        index={index}
                        variant="elevated"
                        alignment={"center"}
                    />
                ))}
            </div>
        </PageHero>
    );
}