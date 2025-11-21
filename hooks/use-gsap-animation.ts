"use client";

import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ==================== TYPES ====================
interface BaseAnimationOptions {
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
  once?: boolean;
  /**
   * Custom ScrollTrigger toggleActions string to override default behavior.
   * Format: "onEnter onLeave onEnterBack onLeaveBack" e.g. "play reset play reset"
   */
  toggleActions?: string;
}

interface FadeInOptions extends BaseAnimationOptions {
  y?: number;
  x?: number;
}

interface StaggerOptions extends FadeInOptions {
  stagger?: number;
}

// ==================== BASE ANIMATION HOOK (INTERNAL) ====================
function useGsapBaseAnimation<T extends HTMLElement, U extends BaseAnimationOptions>(
  target: string | T | null,
  options: U,
  animationProps: gsap.TweenVars,
  deps: any[] = []
): RefObject<T> {
  const ref = useRef<T>(null);
  const {
    duration = 0.6,
    delay = 0,
    ease = "power2.out",
    start = "top 85%",
    once = true,
    toggleActions,
  } = options as BaseAnimationOptions & typeof options;

  useEffect(() => {
    const element = target instanceof HTMLElement ? target : ref.current;
    if (!element) return;

    const animTarget = typeof target === 'string' ? element.querySelectorAll(target) : element;
    if (animTarget instanceof NodeList && animTarget.length === 0) {
        return;
    }


    const ctx = gsap.context(() => {
      gsap.from(animTarget, {
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions:
            typeof toggleActions === "string"
              ? toggleActions
              : once
              ? "play none none none"
              : "play reverse play reverse",
        },
        opacity: 0,
        duration,
        delay,
        ease,
        ...animationProps,
      });
    }, ref);

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration, delay, ease, start, once, toggleActions, ...deps]);

  return ref as RefObject<T>;
}


// ==================== FADE IN ON SCROLL ====================
export function useGsapFadeIn<T extends HTMLElement>(
  options: FadeInOptions = {}
): RefObject<T> {
  const { y = 30, x = 0, ...baseOptions } = options;
  return useGsapBaseAnimation<T, FadeInOptions>(
    null,
    { y, x, ...baseOptions },
    { y, x },
    [y, x]
  );
}

// ==================== STAGGER ANIMATION ====================
export function useGsapStagger<T extends HTMLElement>(
  selector: string = "> *",
  options: StaggerOptions = {}
): RefObject<T> {
  const { y = 40, x = 0, stagger = 0.1, ...baseOptions } = options;
   return useGsapBaseAnimation<T, StaggerOptions>(
    selector,
     { y, x, stagger, ...baseOptions },
    { y, x, stagger },
    [selector, y, x, stagger]
  );
}

// ==================== TEXT REVEAL ====================
/**
 * Kelimeleri sırayla reveal eder
 */
export function useGsapTextReveal<T extends HTMLElement>(
  options: StaggerOptions = {}
): RefObject<T> {
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

  return ref as RefObject<T>;
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
): RefObject<T> {
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

  return ref as RefObject<T>;
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
): RefObject<T> {
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

  return ref as RefObject<T>;
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
): RefObject<T> {
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

  return ref as RefObject<T>;
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

// ==================== ROTATE ON SCROLL ====================
/**
 * Scroll ile rotate animasyonu (scrub)
 * @example
 * const ref = useGsapRotateOnScroll<HTMLDivElement>({ from: -10, to: 10 });
 */
export function useGsapRotateOnScroll<T extends HTMLElement>(
  options: {
    from?: number;
    to?: number;
    start?: string;
    end?: string;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const {
    from = -10,
    to = 10,
    start = "top bottom",
    end = "bottom top",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { rotate: from },
        {
          rotate: to,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [from, to, start, end]);

  return ref as RefObject<T>;
}

// ==================== SKEW ON SCROLL ====================
/**
 * Scroll ile hafif skew efekti – hız hissi verir
 * @example
 * const ref = useGsapSkewOnScroll<HTMLDivElement>({ skewX: 10 });
 */
export function useGsapSkewOnScroll<T extends HTMLElement>(
  options: {
    skewX?: number;
    skewY?: number;
    start?: string;
    end?: string;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const {
    skewX = 10,
    skewY = 0,
    start = "top bottom",
    end = "bottom top",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { skewX: 0, skewY: 0 },
        {
          skewX,
          skewY,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [skewX, skewY, start, end]);

  return ref as RefObject<T>;
}

// ==================== CLIP-PATH REVEAL ====================
/**
 * Clip-path ile mask tarzı reveal animasyonu
 * @example
 * const ref = useGsapClipReveal<HTMLDivElement>();
 */
export function useGsapClipReveal<T extends HTMLElement>(
  options: {
    start?: string;
    duration?: number;
    delay?: number;
    ease?: string;
    once?: boolean;
    toggleActions?: string;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const {
    start = "top 85%",
    duration = 0.7,
    delay = 0,
    ease = "power3.out",
    once = true,
    toggleActions,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Başlangıç clip-path dairesi küçük
    gsap.set(el, {
      clipPath: "circle(0% at 50% 50%)",
    });

    const ctx = gsap.context(() => {
      gsap.to(el, {
        clipPath: "circle(150% at 50% 50%)",
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
                toggleActions:
                  typeof toggleActions === "string"
                    ? toggleActions
                    : once
                    ? "play none none none"
                    : "play reverse play reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [start, duration, delay, ease, once, toggleActions]);

  return ref as RefObject<T>;
}

// ==================== BG COLOR ON SCROLL ====================
/**
 * Scroll ile backgroundColor tween'i
 * @example
 * const ref = useGsapBgColorScroll<HTMLDivElement>({ from: "#0f172a", to: "#22c55e" });
 */
export function useGsapBgColorScroll<T extends HTMLElement>(
  options: {
    from?: string;
    to?: string;
    start?: string;
    end?: string;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const {
    from = "#0f172a",
    to = "#22c55e",
    start = "top bottom",
    end = "bottom top",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { backgroundColor: from },
        {
          backgroundColor: to,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [from, to, start, end]);

  return ref as RefObject<T>;
}

// ==================== COUNT UP ON VIEW ====================
/**
 * Sayıları 0'dan hedefe doğru saydırır (in-view)
 * @example
 * const ref = useGsapCountUpOnView<HTMLSpanElement>({ to: 150 });
 */
export function useGsapCountUpOnView<T extends HTMLElement>(
  options: {
    from?: number;
    to?: number;
    duration?: number;
    start?: string;
    once?: boolean;
    formatter?: (value: number) => string;
    toggleActions?: string;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const {
    from = 0,
    to = 100,
    duration = 1.2,
    start = "top 85%",
    once = true,
    formatter,
    toggleActions,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { value: from };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        value: to,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions:
            typeof toggleActions === "string"
              ? toggleActions
              : once
              ? "play none none none"
              : "play reverse play reverse",
        },
        onUpdate: () => {
          const val = formatter ? formatter(obj.value) : Math.round(obj.value).toString();
          el.textContent = val;
        },
      });
    });

    return () => ctx.revert();
  }, [from, to, duration, start, once, formatter, toggleActions]);

  return ref as RefObject<T>;
}

// ==================== MAGNETIC HOVER ====================
/**
 * Kursörü takip eden hafif "magnetic" hover efekti
 * @example
 * const ref = useGsapMagneticHover<HTMLButtonElement>();
 */
export function useGsapMagneticHover<T extends HTMLElement>(
  options: {
    strength?: number;
    duration?: number;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const { strength = 20, duration = 0.3 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = () => el.getBoundingClientRect();

    const onMove = (e: MouseEvent) => {
      const r = rect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);

      gsap.to(el, {
        x: (x / r.width) * strength,
        y: (y / r.height) * strength,
        duration,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration, ease: "power2.out" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, duration]);

  return ref as RefObject<T>;
}
