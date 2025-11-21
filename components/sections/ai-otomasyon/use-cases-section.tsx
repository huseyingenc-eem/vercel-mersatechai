"use client";

import React, { useEffect, useState } from "react";
import { Container } from "@/components/shared/container";
import { Text } from "@/components/ui/typography/text";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useCasesData } from "./data";
import { useIsMobile } from "@/hooks/use-mobile";
import { useGsapFadeIn, useGsapStagger } from "@/hooks/use-gsap-animation";
import { cn } from "@/lib/utils";
import type { CarouselApi } from "@/components/ui/carousel";

export function UseCasesSection() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // GSAP Hooks
  const headerRef = useGsapFadeIn<HTMLDivElement>({ y: 30, delay: 0 });
  const cardsRef = useGsapStagger<HTMLDivElement>(".use-case-card", {
    y: 40,
    stagger: 0.1,
    duration: 0.5,
  });

  // Carousel API sync
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    api?.scrollTo(index);
  };

  return (
    <Container sectionBg="slate" className="py-16 sm:py-20">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-10 sm:mb-14">
        <Text variant="h2" className="mb-4">
          Gerçek <span className="text-gradient">İş Senaryoları</span>
        </Text>
        <Text variant="lead" theme="muted" className="max-w-2xl mx-auto">
          Başarılı AI otomasyon örnekleri ve somut sonuçlar
        </Text>
      </div>

      {/* Mobile: Carousel */}
      {isMobile ? (
        <div>
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            autoplay
            autoplayDelay={5000}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {useCasesData.map((item, index) => (
                <CarouselItem key={index} className="pl-2 basis-[85%]">
                  <UseCaseCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {useCasesData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === activeIndex ? "w-6 bg-primary" : "w-2 bg-border"
                )}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Desktop: Grid */
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCasesData.map((item, index) => (
            <div key={index} className="use-case-card">
              <UseCaseCard item={item} />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

// Card Component
interface UseCaseCardProps {
  item: (typeof useCasesData)[number];
}

function UseCaseCard({ item }: UseCaseCardProps) {
  const Icon = item.icon;

  return (
    <div className="group h-full bg-card border border-border rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      {/* Header: Icon + Title */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <Text variant="h5" className="leading-tight">
            {item.title}
          </Text>
          <Text variant="tiny" theme="muted" className="mt-1">
            {item.description}
          </Text>
        </div>
      </div>

      {/* Details */}
      <Text variant="tiny" theme="muted" className="leading-relaxed mb-4">
        {item.details}
      </Text>

      {/* Stats */}
      <div className="pt-4 border-t border-border/50 flex items-center justify-between">
        <Text variant="tiny" theme="muted" className="uppercase tracking-wide">
          {item.stats.label}
        </Text>
        <Text variant="h4" className="text-gradient font-bold">
          {item.stats.value}
        </Text>
      </div>
    </div>
  );
}
