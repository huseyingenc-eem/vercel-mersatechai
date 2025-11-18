"use client";
import React from "react";
import {PageHero} from "@/components/shared/page-hero";
import {Card} from "@/components/ui/core/card";
import {Sparkles, Zap, Users, TrendingUp} from "lucide-react";
import {Text} from "@/components/ui/typography/text";

export function HeroSection() {
    const stats = [
        {icon: Zap, value: "7/24", label: "Kesintisiz Destek"},
        {icon: TrendingUp, value: "%80", label: "Verimlilik Artışı"},
        {icon: Users, value: "500+", label: "Mutlu Müşteri"},
        {icon: Sparkles, value: "3x", label: "Daha Hızlı"},
    ];

    return (
        <PageHero
            id="hero"
            badge={{
                icon: <Sparkles className="w-4 h-4"/>,
                text: "AI-Powered Business Automation",
            }}
            title={
                <>
                    <Text variant="h1" theme="default" className="mb-4">
                        İş Süreçlerinizi
                    </Text>
                    <Text
                        variant="h1"
                        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-blue-400 dark:via-purple-400 dark:to-blue-500"
                    >
                        Yapay Zeka ile Dönüştürün
                    </Text>
                </>
            }
            description="Yapay zeka destekli çözümlerimizle iş süreçlerinizi otomatikleştirin, verimliliği %80 artırın ve maliyetleri düşürün"
            primaryCta={{
                text: "Ücretsiz Demo",
                href: "/iletisim",
            }}
            secondaryCta={{
                text: "Hizmetlerimizi İnceleyin",
                href: "/hizmetler",
            }}
            backgroundVariant="gradient" // This now only controls effects like orbs/spotlight
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

