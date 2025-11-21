"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Sparkles } from "lucide-react";
import { Container, SectionHeader } from "@components/shared";
import { servicesData } from "./data";
import type { SlideCard } from "@components/ui/sections/slide-cards";

const SlideCards = dynamic(
  () => import("@components/ui/sections/slide-cards").then((mod) => mod.SlideCards),
  { ssr: false },
);

export function ServicesSection() {
  const { services, badge, heading, subheading } = servicesData;

  const slideCardsData: SlideCard[] = services.map((service) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    image: (
      <Image
        src={service.image}
        alt={service.title}
        width={450}
        height={450}
        className="w-full h-full object-cover"
      />
    ),
    content: (
      <div className="space-y-6">
        {/* Features */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider">
            Özellikler
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        {service.advantages && service.advantages.length > 0 && (
          <div className="hidden md:block space-y-3 pt-4 border-t border-border/60">
            <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Avantajlar
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {service.advantages.map((advantage, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="text-muted-foreground/80">-</span>
                  <span>{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ),
  }));

  return (
    <section className="bg-background">
      {/* Başlık - Container ile */}
      <Container className="text-center py-16 md:py-20 lg:py-24">
        <SectionHeader
          badge={badge.text}
          heading={heading}
          subheading={subheading}
        />
      </Container>

      {/* SlideCards - Container dışında, kendi ID'si ile */}
      <div id="services-slider">
        <SlideCards cards={slideCardsData} />
      </div>
    </section>
  );
}
