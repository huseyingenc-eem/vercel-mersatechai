"use client";
import React from "react";
import {PageHero} from "@/components/shared/page-hero";
import {Card} from "@/components/ui/core/card";
import {Sparkles} from "lucide-react";
import { heroData } from "./data";

export function HeroSection() {
    return (
        <PageHero
            id="hero"
            badge={{
                icon: <Sparkles className="w-4 h-4"/>,
                text: heroData.badge.text,
            }}
            title={heroData.title}
            description={heroData.description}
            primaryCta={heroData.primaryCta}
            secondaryCta={heroData.secondaryCta}
            backgroundVariant="gradient"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
                {heroData.stats.map((stat, index) => (
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