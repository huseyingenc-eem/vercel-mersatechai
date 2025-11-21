"use client";

import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ==================== TYPES ====================
interface FadeInOptions {
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  once?: boolean;
}

interface StaggerOptions extends FadeInOptions {
  stagger?: number;
}

// ==================== FADE IN ON SCROLL ====================
/**
 * Framer Motion'daki whileInView yerine kullanılır
 * @example
 * const ref = useGsapFadeIn<HTMLDivElement>();
 * return <div ref={ref}>İçerik</div>
 */
export function useGsapFadeIn<T extends HTMLElement>(
  options: FadeInOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const {
    y = 30,
    x = 0,
    duration = 0.6,
    delay = 0,
    ease = "power2.out",
    start = "top 85%",
    once = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? "play none none none" : "play reverse play reverse",
        },
        opacity: 0,
        y,
        x,
        duration,
        delay,
        ease,
      });
    });

    return () => ctx.revert();
  }, [y, x, duration, delay, ease, start, once]);

  return ref;
}

// ==================== STAGGER ANIMATION ====================
/**
 * Çocuk elemanları sırayla animate eder
 * @example
 * const ref = useGsapStagger<HTMLDivElement>({ stagger: 0.1 });
 * return <div ref={ref}><div>1</div><div>2</div></div>
 */
export function useGsapStagger<T extends HTMLElement>(
  selector: string = "> *",
  options: StaggerOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const {
    y = 40,
    x = 0,
    duration = 0.5,
    delay = 0,
    ease = "power2.out",
    start = "top 80%",
    stagger = 0.1,
    once = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(selector), {
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? "play none none none" : "play reverse play reverse",
        },
        opacity: 0,
        y,
        x,
        duration,
        delay,
        ease,
        stagger,
      });
    });

    return () => ctx.revert();
  }, [selector, y, x, duration, delay, ease, start, stagger, once]);

  return ref;
}

// ==================== TEXT REVEAL ====================
/**
 * Kelimeleri sırayla reveal eder
 */
export function useGsapTextReveal<T extends HTMLElement>(
  options: StaggerOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const {
    duration = 0.6,
    delay = 0,
    ease = "power3.out",
    start = "top 85%",
    stagger = 0.05,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Kelimeleri span'lara böl
    const text = el.innerText;
    const words = text.split(" ");
    el.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="gsap-word inline-block">${word}</span></span>`
      )
      .join(" ");

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".gsap-word"), {
        scrollTrigger: {
          trigger: el,
          start,
        },
        y: "100%",
        opacity: 0,
        stagger,
        duration,
        delay,
        ease,
      });
    });

    return () => ctx.revert();
  }, [duration, delay, ease, start, stagger]);

  return ref;
}

// ==================== SCALE ON SCROLL ====================
/**
 * Scroll ile scale animasyonu (scrub)
 */
export function useGsapScale<T extends HTMLElement>(
  options: {
    from?: number;
    to?: number;
    start?: string;
    end?: string;
  } = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const {
    from = 0.8,
    to = 1,
    start = "top 80%",
    end = "top 30%",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: from, opacity: 0.5 },
        {
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: 1,
          },
          scale: to,
          opacity: 1,
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, [from, to, start, end]);

  return ref;
}

// ==================== HOVER ANIMATION ====================
/**
 * Hover'da scale animasyonu
 */
export function useGsapHover<T extends HTMLElement>(
  options: {
    scale?: number;
    duration?: number;
  } = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const { scale = 1.05, duration = 0.3 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onEnter = () => {
      gsap.to(el, { scale, duration, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(el, { scale: 1, duration, ease: "power2.out" });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [scale, duration]);

  return ref;
}

// ==================== PARALLAX ====================
/**
 * Parallax efekti
 */
export function useGsapParallax<T extends HTMLElement>(
  options: {
    y?: number;
    speed?: number;
  } = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const { y = -50, speed = 1 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
        y,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, [y, speed]);

  return ref;
}

// ==================== TIMELINE ANIMATION ====================
/**
 * Birden fazla animasyonu sırayla çalıştırır
 * @returns timeline ref'i ve kontrol fonksiyonları
 */
export function useGsapTimeline() {
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tlRef.current = gsap.timeline({ paused: true });
    return () => {
      tlRef.current?.kill();
    };
  }, []);

  return {
    timeline: tlRef,
    play: () => tlRef.current?.play(),
    pause: () => tlRef.current?.pause(),
    reverse: () => tlRef.current?.reverse(),
    restart: () => tlRef.current?.restart(),
  };
}
