"use client";

import React, { useRef, useEffect, useId, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Plugin'i global olarak bir kez register et
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============ GLOBAL COORDINATOR ============
// Tüm HorizontalScrollContainer'ları koordine eder
// Çakışmayı önlemek için sıralı initialization sağlar

interface PendingTrigger {
  id: string;
  setup: () => void;
  element: HTMLElement;
}

const pendingTriggers: PendingTrigger[] = [];
let initTimeout: ReturnType<typeof setTimeout> | null = null;
let isInitializing = false;

function queueTriggerSetup(id: string, element: HTMLElement, setup: () => void) {
  // Aynı ID varsa güncelle
  const existingIndex = pendingTriggers.findIndex((t) => t.id === id);
  if (existingIndex >= 0) {
    pendingTriggers[existingIndex] = { id, setup, element };
  } else {
    pendingTriggers.push({ id, setup, element });
  }

  // Debounce: Tüm component'ler mount olduktan sonra sıralı init
  if (initTimeout) clearTimeout(initTimeout);
  initTimeout = setTimeout(() => {
    initializeAllTriggers();
  }, 150);
}

function removeTriggerFromQueue(id: string) {
  const index = pendingTriggers.findIndex((t) => t.id === id);
  if (index >= 0) {
    pendingTriggers.splice(index, 1);
  }
}

function initializeAllTriggers() {
  if (isInitializing || pendingTriggers.length === 0) return;
  isInitializing = true;

  // DOM sırasına göre sırala (yukarıdan aşağıya)
  pendingTriggers.sort((a, b) => {
    const rectA = a.element.getBoundingClientRect();
    const rectB = b.element.getBoundingClientRect();
    return rectA.top - rectB.top;
  });

  // Sırayla setup çağır
  pendingTriggers.forEach((trigger, index) => {
    // refreshPriority: Yüksek değer = önce refresh
    // Üstteki elementler yüksek priority almalı
    const priority = pendingTriggers.length - index;
    (trigger as any).priority = priority;
    trigger.setup();
  });

  // Tüm trigger'lar kurulduktan sonra refresh
  requestAnimationFrame(() => {
    ScrollTrigger.refresh(true); // true = recalculate all positions
    isInitializing = false;
  });
}

// ============ COMPONENT ============

export interface HorizontalScrollContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Scroll progress callback (0-1 arası) */
  onScrollUpdate?: (progress: number) => void;
  /** Section aktif olduğunda çağrılır */
  onActiveChange?: (isActive: boolean) => void;
  /** Pin modu - true: section sabitlenir, false: normal scroll içinde animate */
  pinned?: boolean;
  /** Scroll mesafesi çarpanı - varsayılan 1 (içerik genişliği kadar) */
  scrollMultiplier?: number;
}

export function HorizontalScrollContainer({
  children,
  className,
  onScrollUpdate,
  onActiveChange,
  pinned = true,
  scrollMultiplier = 1,
}: HorizontalScrollContainerProps) {
  const uniqueId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<gsap.Context | null>(null);
  const isSetupRef = useRef(false);

  // Stable callback refs
  const onScrollUpdateRef = useRef(onScrollUpdate);
  const onActiveChangeRef = useRef(onActiveChange);

  useEffect(() => {
    onScrollUpdateRef.current = onScrollUpdate;
    onActiveChangeRef.current = onActiveChange;
  }, [onScrollUpdate, onActiveChange]);

  // Actual setup function
  const doSetup = useCallback(() => {
    if (!contentRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;

    // Eski context'i temizle
    if (contextRef.current) {
      contextRef.current.revert();
      contextRef.current = null;
    }

    const contentWidth = content.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollAmount = -(contentWidth - viewportWidth);

    if (contentWidth <= viewportWidth) {
      gsap.set(content, { x: 0 });
      onScrollUpdateRef.current?.(0);
      return;
    }

    const scrollDistance = contentWidth * scrollMultiplier;

    // DOM pozisyonuna göre refreshPriority hesapla
    // Sayfanın en üstündeki element en yüksek priority alır
    const rect = container.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const absoluteTop = rect.top + scrollTop;
    // Priority: Daha yüksek = önce işlenir. Üsttekiler yüksek olmalı.
    // 10000'den çıkararak ters çeviriyoruz
    const refreshPriority = Math.round(10000 - absoluteTop);

    contextRef.current = gsap.context(() => {
      const triggerConfig: ScrollTrigger.Vars = {
        id: uniqueId,
        trigger: container,
        scrub: 1,
        invalidateOnRefresh: true,
        refreshPriority, // DOM sırasına göre priority
        onUpdate: (self) => {
          onScrollUpdateRef.current?.(self.progress);
        },
        onEnter: () => onActiveChangeRef.current?.(true),
        onLeave: () => onActiveChangeRef.current?.(false),
        onEnterBack: () => onActiveChangeRef.current?.(true),
        onLeaveBack: () => onActiveChangeRef.current?.(false),
      };

      if (pinned) {
        Object.assign(triggerConfig, {
          start: "top top",
          end: () => `+=${scrollDistance}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        });
      } else {
        Object.assign(triggerConfig, {
          start: "top 80%",
          end: "bottom 20%",
          pin: false,
        });
      }

      gsap.to(content, {
        x: scrollAmount,
        ease: "none",
        scrollTrigger: triggerConfig,
      });
    }, container);

    isSetupRef.current = true;
  }, [uniqueId, pinned, scrollMultiplier]);

  // Mount effect
  useEffect(() => {
    if (!containerRef.current) return;

    // Queue'ya ekle - coordinator sıralı initialize edecek
    queueTriggerSetup(uniqueId, containerRef.current, doSetup);

    // Resize handler
    const handleResize = () => {
      clearTimeout((handleResize as any).timeout);
      (handleResize as any).timeout = setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      removeTriggerFromQueue(uniqueId);

      if (contextRef.current) {
        contextRef.current.revert();
        contextRef.current = null;
      }
    };
  }, [uniqueId, doSetup]);

  return (
    <div
      ref={containerRef}
      data-scroll-container={uniqueId}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        ref={contentRef}
        className="flex flex-nowrap h-full w-max items-center"
      >
        {children}
      </div>
    </div>
  );
}

// ============ UTILITIES ============

/** Tüm ScrollTrigger'ları yeniden hesapla */
export function refreshAllScrollTriggers() {
  if (typeof window !== "undefined") {
    ScrollTrigger.refresh(true);
  }
}

/** Belirli bir container'ın ScrollTrigger'ını yenile */
export function refreshScrollTrigger(containerId: string) {
  if (typeof window !== "undefined") {
    const trigger = ScrollTrigger.getById(containerId);
    if (trigger) {
      trigger.refresh();
    }
  }
}

/** Sayfa yüklendiğinde veya route değişikliğinde çağır */
export function reinitializeScrollTriggers() {
  if (typeof window !== "undefined") {
    // Tüm trigger'ları temizle
    ScrollTrigger.getAll().forEach((t) => t.kill());
    // Pending queue'yu temizle
    pendingTriggers.length = 0;
    isInitializing = false;
  }
}
