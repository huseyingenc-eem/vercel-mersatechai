"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// GSAP Plugin Register
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimasyonDemoPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const fadeInRefs = useRef<HTMLDivElement[]>([]);
  const staggerRef = useRef<HTMLDivElement>(null);
  const textRevealRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ========== 1. HERO ANIMATION ==========
      if (heroRef.current) {
        const heroTl = gsap.timeline();
        heroTl
          .from(heroRef.current.querySelector(".hero-badge"), {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: "power3.out",
          })
          .from(
            heroRef.current.querySelector(".hero-title"),
            {
              opacity: 0,
              y: 30,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.3"
          )
          .from(
            heroRef.current.querySelector(".hero-subtitle"),
            {
              opacity: 0,
              y: 20,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.4"
          );
      }

      // ========== 2. FADE IN ON SCROLL ==========
      fadeInRefs.current.forEach((el) => {
        if (el) {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: "power2.out",
          });
        }
      });

      // ========== 3. STAGGER ANIMATION ==========
      if (staggerRef.current) {
        gsap.from(staggerRef.current.querySelectorAll(".stagger-item"), {
          scrollTrigger: {
            trigger: staggerRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 50,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      // ========== 4. TEXT REVEAL ANIMATION ==========
      if (textRevealRef.current) {
        const text = textRevealRef.current;
        const words = text.innerText.split(" ");
        text.innerHTML = words
          .map((word) => `<span class="inline-block overflow-hidden"><span class="word-inner inline-block">${word}</span></span>`)
          .join(" ");

        gsap.from(text.querySelectorAll(".word-inner"), {
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
          },
          y: "100%",
          opacity: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      // ========== 5. CARD HOVER SIMULATION ==========
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".hover-card");

        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
          opacity: 0,
          scale: 0.9,
          y: 30,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.5)",
        });

        cards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.03,
              duration: 0.3,
              ease: "power2.out",
            });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }

      // ========== 6. PARALLAX EFFECT ==========
      if (parallaxRef.current) {
        gsap.to(parallaxRef.current.querySelector(".parallax-bg"), {
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          y: -100,
          ease: "none",
        });
      }

      // ========== 7. SCALE ON SCROLL ==========
      if (scaleRef.current) {
        gsap.from(scaleRef.current, {
          scrollTrigger: {
            trigger: scaleRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
          scale: 0.8,
          opacity: 0.5,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const addToFadeInRefs = (el: HTMLDivElement | null) => {
    if (el && !fadeInRefs.current.includes(el)) {
      fadeInRefs.current.push(el);
    }
  };

  // Standart Layout Wrapper (Container yerine)
  const SectionWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", className)}>
      {children}
    </div>
  );

  return (
    <main className="min-h-screen bg-background">
      {/* ========== HERO SECTION ========== */}
      <section ref={heroRef} className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <SectionWrapper className="text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary font-medium">GSAP Animasyon Demo</span>
          </div>
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Framer Motion&apos;a <span className="text-primary">Alternatif</span>
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            GSAP ile performanslı, esnek ve güçlü animasyonlar. Scroll-triggered, stagger, parallax ve daha fazlası.
          </p>
        </SectionWrapper>
      </section>

      {/* ========== FADE IN ON SCROLL ========== */}
      <section className="py-20 bg-secondary/30">
        <SectionWrapper>
          <div ref={addToFadeInRefs} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Scroll ile <span className="text-primary">Fade In</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Container olmadan saf HTML yapısı ve GSAP ScrollTrigger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                ref={addToFadeInRefs}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{i}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Kart {i}</h3>
                <p className="text-muted-foreground">
                  Her kart scroll ile görünür hale geldiğinde yukarı doğru fade-in animasyonu yapar.
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* ========== STAGGER ANIMATION ========== */}
      <section className="py-20">
        <SectionWrapper>
          <div ref={addToFadeInRefs} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Stagger <span className="text-primary">Animasyonu</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elemanlar sırayla, belirli aralıklarla animasyon yapar.
            </p>
          </div>

          <div ref={staggerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Hız", "Güvenlik", "Ölçek", "Tasarruf", "Entegrasyon", "Analitik", "Otomasyon", "Destek"].map(
              (item, i) => (
                <div
                  key={i}
                  className="stagger-item bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 text-center"
                >
                  <span className="text-lg font-semibold text-foreground">{item}</span>
                </div>
              )
            )}
          </div>
        </SectionWrapper>
      </section>

      {/* ========== TEXT REVEAL ========== */}
      <section className="py-20 bg-secondary/30">
        <SectionWrapper>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-primary font-medium mb-4">TEXT REVEAL ANİMASYONU</p>
            <h2
              ref={textRevealRef}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight"
            >
              Yapay zeka ile işletmenizi geleceğe taşıyın
            </h2>
          </div>
        </SectionWrapper>
      </section>

      {/* ========== HOVER CARDS ========== */}
      <section className="py-20">
        <SectionWrapper>
          <div ref={addToFadeInRefs} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Hover <span className="text-primary">Efektleri</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              GSAP ile hover animasyonları - scale, rotate, color transitions.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "AI Süreç", color: "from-blue-500 to-cyan-500" },
              { title: "Veri Analizi", color: "from-purple-500 to-pink-500" },
              { title: "Otomasyon", color: "from-orange-500 to-red-500" },
            ].map((item, i) => (
              <div
                key={i}
                className="hover-card cursor-pointer bg-card border border-border rounded-2xl p-8 transition-shadow hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}
                >
                  <span className="text-white text-2xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">
                  Hover yapınca scale animasyonu çalışır. GSAP ile smooth geçişler.
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* ========== PARALLAX SECTION ========== */}
      <section ref={parallaxRef} className="py-32 relative overflow-hidden">
        <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent" />
        <SectionWrapper>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Parallax <span className="text-primary">Efekti</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Arka plan farklı hızda scroll ederek derinlik hissi yaratır.
            </p>
          </div>
        </SectionWrapper>
      </section>

      {/* ========== SCALE ON SCROLL ========== */}
      <section className="py-20 bg-secondary/30">
        <SectionWrapper>
          <div
            ref={scaleRef}
            className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Scroll ile Scale
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Scrub özelliği ile scroll pozisyonuna bağlı animasyon. Scroll ettikçe büyür.
            </p>
            <button className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors">
              Daha Fazla Bilgi
            </button>
          </div>
        </SectionWrapper>
      </section>

      {/* ========== SUMMARY ========== */}
      <section className="py-20">
        <SectionWrapper>
          <div ref={addToFadeInRefs} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Sonuç
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Bu sayfada <strong>hiçbir Framer Motion bileşeni</strong> (Container dahil) kullanılmamıştır. 
              Tüm animasyonlar sadece GSAP tarafından yönetilmektedir.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-green-500/10 text-green-600 rounded-lg text-sm font-medium">
                Sıfır Framer Yükü
              </div>
              <div className="px-4 py-2 bg-blue-500/10 text-blue-600 rounded-lg text-sm font-medium">
                Saf GSAP
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>
    </main>
  );
}