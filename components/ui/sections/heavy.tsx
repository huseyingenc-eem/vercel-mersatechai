import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { SlideCard } from "./slide-cards";

export const HorizontalScrollContainer = dynamic(
  () => import("./horizontal-scroll-container").then((mod: any) => mod.HorizontalScrollContainer ?? mod.default),
  { ssr: false },
);

export const StickyScroll = dynamic(
  () => import("./sticky-scroll-reveal").then((mod: any) => mod.StickyScroll ?? mod.default),
  { ssr: false },
);

export const ScrollRevealContent = dynamic(
  () => import("./scroll-reveal-content").then((mod: any) => mod.ScrollRevealContent ?? mod.default),
  { ssr: false },
);

export const SlideCards = (dynamic(
  () => import("./slide-cards").then((mod: any) => mod.SlideCards ?? mod.default),
  { ssr: false },
) as unknown) as ComponentType<{ cards: SlideCard[]; className?: string; cardClassName?: string }>;
