"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HorizontalScrollContainer } from "./horizontal-scroll-container";
import { useIsMobile } from "@/hooks/use-mobile";

export interface SlideCard {
  id: string | number;
  title?: string;
  description?: string;
  image?: React.ReactNode;
  content?: React.ReactNode;
}

interface SlideCardsProps {
  cards: SlideCard[];
  className?: string;
  cardClassName?: string;
}

export function SlideCards({ cards, className, cardClassName }: SlideCardsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  const handleScrollUpdate = (progress: number) => {
    const index = Math.round(progress * (cards.length - 1));
    setActiveIndex(index);
  };

  const wrapperSpacing = isMobile ? "mt-12" : "mt-0";
  const sidePadding = isMobile ? "5vw" : "20vw";

  return (
    <div className={cn("relative bg-transparent", wrapperSpacing, className)}>
      <HorizontalScrollContainer
        onScrollUpdate={handleScrollUpdate}
        pinned={true}
        className="h-screen"
      >
        {/* Sol padding */}
        <div className="flex-shrink-0" style={{ width: sidePadding }} />

        {/* Cards */}
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={cn(
              "flex-shrink-0 relative mx-2 md:mx-[2.5vw]",
              "w-[90vw] md:w-[60vw]",
              "h-[80vh] md:h-[70vh]",
              "bg-card/95 dark:bg-card/90 rounded-3xl shadow-xl border border-border/60",
              "transition-all duration-500 ease-out",
              activeIndex === index ? "opacity-100" : "opacity-70",
              cardClassName
            )}
          >
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
              {/* Sol taraf: yazı */}
              <div className="order-2 md:order-1 flex flex-col justify-center text-left space-y-4 md:space-y-6 p-4 md:p-8">
                {card.title && (
                  <h3 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                    {card.title}
                  </h3>
                )}
                {card.description && (
                  <p className="text-muted-foreground text-base md:text-xl leading-relaxed">
                    {card.description}
                  </p>
                )}
                {card.content && <div className="pt-4">{card.content}</div>}
              </div>

              {/* Sağ taraf: görsel */}
              <div className="order-1 md:order-2 w-full h-[40vh] md:h-full flex items-center justify-center relative">
                {card.image ? (
                  <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-secondary/60 dark:bg-secondary/40 border border-border/60">
                    {card.image}
                  </div>
                ) : (
                  <div className="w-full h-full rounded-2xl border-2 border-dashed border-border/60 flex items-center justify-center text-muted-foreground/70">
                    Görsel Alanı
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Sağ padding / buffer */}
        <div className="flex-shrink-0" style={{ width: sidePadding }} />
      </HorizontalScrollContainer>
    </div>
  );
}
