"use client";
import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Container } from "@components/shared";
import { SlideCards } from "@components/ui";
import { horizontalScrollData } from "../home/data";
import type { SlideCard } from "@components/ui/sections/slide-cards";

export function HorizontalScrollSection() {
  const { cards } = horizontalScrollData;

  const slideCardsData: SlideCard[] = cards.map((card) => ({
    id: card.id,
    title: card.title,
    description: card.description,
    image: (
      <Image
        src={card.image}
        alt={card.title}
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
    ),
  }));

  return (
    <section className="bg-background">
      <Container className="py-16 md:py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">
            Hizmetlerimiz
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Yapay Zekanın Gücünü Keşfedin
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Sunduğumuz çeşitli yapay zeka hizmetleriyle iş süreçlerinizi nasıl bir
          üst seviyeye taşıyabileceğinizi görün.
        </p>
      </Container>
      <SlideCards cards={slideCardsData} />
    </section>
  );
}