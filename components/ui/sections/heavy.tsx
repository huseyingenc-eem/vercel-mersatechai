import dynamic from "next/dynamic";
import type { ComponentType, ReactNode } from "react";
import type { SlideCard } from "./slide-cards";

// HorizontalScrollContainer için tam tip tanımı
interface HorizontalScrollContainerProps {
  children: ReactNode;
  className?: string;
  /** Scroll progress callback (0-1 arası) */
  onScrollUpdate?: (progress: number) => void;
  /** Section aktif olduğunda çağrılır */
  onActiveChange?: (isActive: boolean) => void;
  /** Pin modu - true: section sabitlenir, false: normal scroll içinde animate */
  pinned?: boolean;
  /** Scroll mesafesi çarpanı - varsayılan 1 */
  scrollMultiplier?: number;
}

export const HorizontalScrollContainer = (dynamic(
  () => import("./horizontal-scroll-container").then((mod: any) => mod.HorizontalScrollContainer ?? mod.default),
  { ssr: false },
) as unknown) as ComponentType<HorizontalScrollContainerProps>;

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
