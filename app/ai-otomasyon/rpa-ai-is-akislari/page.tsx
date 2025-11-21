"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  Cpu,
  Brain,
  Zap,
  Users,
  TrendingUp,
  Clock,
  Shield,
  BarChart3,
  ArrowRight,
  ArrowLeft,
  Check,
  Layers,
  Search,
  Settings,
  Play,
  Rocket,
  Building2,
  ShoppingCart,
  Headphones,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";

 

// GSAP Plugin Register
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Section Wrapper Component
const Section = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    id?: string;
  }
>(({ children, className, id }, ref) => (
  <section id={id} className={cn("py-20 lg:py-28", className)}>
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
));
Section.displayName = "Section";

// ==================== DATA ====================
const useCases = [
  {
    icon: Building2,
    title: "Finans ve Muhasebe",
    color: "from-blue-500 to-cyan-500",
    items: [
      "Fatura, irsaliye ve ekstrelerin otomatik okunması",
      "Muhasebe veya ERP sistemine otomatik kayıt",
      "Ödeme onay akışlarının tetiklenmesi",
      "Mutabakat süreçlerinin otomatik yürütülmesi",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Satınalma ve Satış Tedarik",
    color: "from-purple-500 to-pink-500",
    items: [
      "Tedarikçi teklif e-postalarının sınıflandırılması",
      "Tekliflerin kriterlere göre karşılaştırılması",
      "Satınalma onay akışlarının başlatılması",
      "ERP'de sipariş kayıtlarının otomatik açılması",
    ],
  },
  {
    icon: Users,
    title: "İnsan Kaynakları ve HR",
    color: "from-green-500 to-emerald-500",
    items: [
      "Kariyer başvurularının otomatik toplanması",
      "CV'lerin analiz edilip önceliklendirilmesi",
      "Aday iletişimlerinin otomatik yönlendirilmesi",
      "İzin, masraf formlarının otomatik işlenmesi",
    ],
  },
  {
    icon: Truck,
    title: "Operasyon ve Lojistik",
    color: "from-orange-500 to-red-500",
    items: [
      "Sipariş durumlarının konsolide edilmesi",
      "Taşıma belgelerinin okunup kontrol edilmesi",
      "Müşterilere otomatik bilgilendirme",
      "SLA ihlali risklerinin özelliklenceden tespiti",
    ],
  },
  {
    icon: Headphones,
    title: "Müşteri Destek",
    color: "from-indigo-500 to-purple-500",
    items: [
      "E-posta ve chat mesajlarının sınıflandırılması",
      "Sık sorulara AI destekli otomatik cevap",
      "CRM ve ticket sistemlerinde işlem yapma",
      "Karmaşık durumların analiz edilmesi",
      "İnsana devredilmesi",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Süreç Keşfi ve Hedef Tanımlama",
    description:
      "Mevcut süreçlerinizi dinliyoruz. Hangi adımların manuel yürüdüğünü, nerede zaman kaybı ve hata oluştuğunu birlikte haritalıyoruz. Net hedefler koyuyoruz: neyi ne kadar hızlandırmak istediğinizi tanımlıyoruz.",
    icon: Search,
  },
  {
    number: "02",
    title: "Hedef İş Akışı Tasarımı",
    description:
      "Hangi adımları RPA botlarının, hangilerini yapay zekanın, hangilerini insan onayının yürüteceğini gösteren workflow taslağı hazırlıyoruz. Giriş/Çıkış verilerini ve kuralları netleştiriyoruz.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Bot ve AI Modellerinin Geliştirilmesi",
    description:
      "RPA botlarını sistemlerle konuşturuyoruz, doküman okuyacak AI modellerini devreye alıyoruz. Amaç: botların sadece butona basması değil, doküman okuyup karar alabilmesi.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Pilot Uygulama ve İnce Ayar",
    description:
      "Seçtiğimiz süreç üzerinde pilot uygulama yapıyoruz. Gerçek verilerle çalışarak istisnaları topluyor, kuralları rafine ediyor, kullanıcı geri bildirimleriyle süreci stabilize ediyoruz.",
    icon: Play,
  },
  {
    number: "05",
    title: "Canlı Ortam ve Sürekli Gelişim",
    description:
      "Pilot başarıya ulaştığında çözümü canlıya alıyoruz. Dashboard ve raporlarla performansı izliyor, başka süreçleri de ekleyerek otomasyon kapsamını büyütüyoruz.",
    icon: Rocket,
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Tekrarlayan İş Yükünde Azalma",
    description:
      "Fatura girişi, form doldurma, sistemler arası veri taşıma gibi kimsenin yapmak istemediği işlerden insanları kurtarır.",
  },
  {
    icon: Shield,
    title: "Hata Oranında Düşüş",
    description:
      "Kural tabanlı botlar ve tutarlı AI modelleri sayesinde, manuel girişten kaynaklanan hatalar büyük ölçüde ortadan kalkar.",
  },
  {
    icon: Clock,
    title: "Daha Hızlı Süreçler",
    description:
      "Botlar 7/24, mola vermeden çalışır. Bir işlemi saniyeler içinde tamamlayabilir, toplam süreç süresini birkaç kata kadar azaltır.",
  },
  {
    icon: Layers,
    title: "Ölçeklenebilirlik",
    description:
      "İş hacmi arttığında yeni personel yerine bot sayısını ve kapasitesini artırmak yeterlidir.",
  },
  {
    icon: Zap,
    title: "Mevcut Sistemlerle Entegrasyon",
    description:
      "ERP, CRM, muhasebe programları ve e-posta sistemlerinizle entegre çalışır. Mevcut yatırımlarınızı korur.",
  },
  {
    icon: BarChart3,
    title: "Şeffaflık ve İzlenebilirlik",
    description:
      "Botların yaptığı her işlem log'lanır. Kim, ne zaman, hangi adımı tetiklemiş net olarak izlenebilir.",
  },
];

// ==================== COMPONENT ====================
export default function RPAAIIsAkislariPage() {
  // Refs
  const heroRef = useRef<HTMLDivElement>(null);
  const whatIsRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  // Tüm animasyonlar tek useEffect içinde
  useEffect(() => {
    const ctx = gsap.context(() => {
      // ========== 1. HERO ANIMATION ==========
      if (heroRef.current) {
        const heroTl = gsap.timeline();
        heroTl
          .from(heroRef.current.querySelector(".hero-back"), { opacity: 0, x: -20, duration: 0.4, ease: "power3.out" })
          .from(heroRef.current.querySelector(".hero-badge"), { opacity: 0, y: -20, duration: 0.5, ease: "power3.out" }, "-=0.2")
          .from(heroRef.current.querySelector(".hero-title"), { opacity: 0, y: 40, duration: 0.7, ease: "power3.out" }, "-=0.2")
          .from(heroRef.current.querySelector(".hero-subtitle"), { opacity: 0, y: 30, duration: 0.6, ease: "power3.out" }, "-=0.3")
          .from(heroRef.current.querySelector(".hero-stats"), { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" }, "-=0.2")
          .from(heroRef.current.querySelector(".hero-cta"), { opacity: 0, scale: 0.9, duration: 0.4, ease: "back.out(1.5)" }, "-=0.1");
      }

      // ========== 2. WHAT IS SECTION ==========
      if (whatIsRef.current) {
        gsap.from(whatIsRef.current.querySelector(".section-header"), {
          scrollTrigger: { trigger: whatIsRef.current, start: "top 85%" },
          opacity: 0, y: 40, duration: 0.6, ease: "power2.out"
        });
        gsap.from(whatIsRef.current.querySelectorAll(".info-card"), {
          scrollTrigger: { trigger: whatIsRef.current, start: "top 80%" },
          opacity: 0, y: 50, stagger: 0.15, duration: 0.6, ease: "power2.out"
        });
        gsap.from(whatIsRef.current.querySelectorAll(".feature-item"), {
          scrollTrigger: { trigger: whatIsRef.current.querySelector(".feature-list"), start: "top 85%" },
          opacity: 0, x: -30, stagger: 0.08, duration: 0.5, ease: "power2.out"
        });
      }

      // ========== 3. USE CASES SECTION ==========
      if (useCasesRef.current) {
        gsap.from(useCasesRef.current.querySelector(".section-header"), {
          scrollTrigger: { trigger: useCasesRef.current, start: "top 85%" },
          opacity: 0, y: 40, duration: 0.6, ease: "power2.out"
        });
        gsap.from(useCasesRef.current.querySelectorAll(".use-case-card"), {
          scrollTrigger: { trigger: useCasesRef.current.querySelector(".use-cases-grid"), start: "top 85%" },
          opacity: 0, y: 50, scale: 0.95, stagger: 0.1, duration: 0.5, ease: "back.out(1.5)"
        });
      }

      // ========== 4. STEPS SECTION ==========
      if (stepsRef.current) {
        gsap.from(stepsRef.current.querySelector(".section-header"), {
          scrollTrigger: { trigger: stepsRef.current, start: "top 85%" },
          opacity: 0, y: 40, duration: 0.6, ease: "power2.out"
        });
        gsap.from(stepsRef.current.querySelectorAll(".step-card"), {
          scrollTrigger: { trigger: stepsRef.current.querySelector(".steps-container"), start: "top 80%" },
          opacity: 0, x: -40, stagger: 0.15, duration: 0.6, ease: "power2.out"
        });
        // Timeline line
        if (timelineLineRef.current) {
          gsap.from(timelineLineRef.current, {
            scrollTrigger: {
              trigger: stepsRef.current.querySelector(".steps-container"),
            start: "top 75%",
            end: "bottom 50%",
            scrub: 1,
          },
          scaleY: 0,
          transformOrigin: "top",
          ease: "none",
        });
        }
      }

      // ========== 5. BENEFITS SECTION ==========
      if (benefitsRef.current) {
        gsap.from(benefitsRef.current.querySelector(".section-header"), {
          scrollTrigger: { trigger: benefitsRef.current, start: "top 85%" },
          opacity: 0, y: 40, duration: 0.6, ease: "power2.out"
        });
        gsap.from(benefitsRef.current.querySelectorAll(".benefit-card"), {
          scrollTrigger: { trigger: benefitsRef.current.querySelector(".benefits-grid"), start: "top 85%" },
          opacity: 0, y: 40, stagger: 0.1, duration: 0.5, ease: "power2.out"
        });
      }

      // ========== 6. CTA SECTION ==========
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scrollTrigger: { trigger: ctaRef.current, start: "top 85%" },
          opacity: 0, y: 30, scale: 0.98, duration: 0.7, ease: "power2.out"
        });
      }
    });

    return () => ctx.revert();
  }, []); 

  return (
    <main className="min-h-screen bg-background">
      {/* ==================== HERO ==================== */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link
            href="/ai-otomasyon"
            className="hero-back inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">AI Otomasyon</span>
          </Link>

          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              RPA + AI İş Akışları
            </span>
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            İşinizi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500">
              Otomatik Pilota
            </span>{" "}
            Alın
          </h1>

          <p className="hero-subtitle text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Robotik süreç otomasyonu (RPA) ve yapay zekayı bir araya getirerek,
            sadece tıklama yapan botlardan değil,{" "}
            <span className="text-foreground font-medium">
              okuyan, anlayan ve karar verebilen
            </span>{" "}
            akıllı iş akışları tasarlıyoruz.
          </p>

          <div className="hero-stats flex flex-wrap justify-center gap-8 mb-10">
            {[
              { value: "%50-80", label: "İş Yükü Azalması" },
              { value: "3-5x", label: "Hız Artışı" },
              { value: "%90", label: "Hata Azalması" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
            >
              Ücretsiz Analiz Talep Et
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#nasil-calisiyoruz"
              className="px-8 py-4 border border-border text-foreground font-medium rounded-xl hover:bg-muted/50 transition-all"
            >
              Nasıl Çalışıyoruz?
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== WHAT IS RPA + AI ==================== */}
      <Section ref={whatIsRef} className="bg-secondary/30">
        <div className="section-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            RPA + AI İş Akışları{" "}
            <span className="text-primary">Nedir?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Klasik robotik süreç otomasyonunu yapay zeka yetenekleriyle
            birleştirerek, uçtan uca çalışan akıllı süreçler oluşturma
            yaklaşımıdır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="info-card bg-card border border-border rounded-2xl p-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Klasik RPA
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Ekranlarda belirli butonlara tıklayan, formlara veri yazan ve
              sistemler arasında kopyala-yapıştır yapan yazılım robotlarıdır.
              Kurallı ve tekrar eden işler için idealdir, ancak{" "}
              <span className="text-foreground font-medium">
                istisna durumlarında tıkanır
              </span>
              .
            </p>
          </div>

          <div className="info-card bg-card border border-border rounded-2xl p-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-6">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              RPA + AI Birleşimi
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yapay zeka ile birleştiğinde bu akışlar sadece &quot;iş yapan&quot; botlar
              olmaktan çıkar. Kısacası:{" "}
              <span className="text-foreground font-medium">
                RPA eller, AI beyin gibi çalışır
              </span>
              . İkisini birleştirdiğinizde kendi kendine işleyen sistemler ortaya
              çıkar.
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">
            AI ile Birleşince Botlar Neler Yapabilir?
          </h3>
          <div className="feature-list grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "PDF, e-posta, form ve chat mesajlarını okuyup anlayabilir",
              "Dokümanlardan alan bazlı veri çıkarabilir",
              "Müşteri mesajlarını sınıflandırıp doğru sürece yönlendirebilir",
              "Belirsiz durumlarda kural önerebilir, riskli durumlarda insan onayı isteyebilir",
              "Sürekli öğrenerek süreç kalitesini artırabilir",
              "Karmaşık kararları bağlama göre verebilir",
            ].map((item, i) => (
              <div key={i} className="feature-item flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ==================== USE CASES ==================== */}
      <Section ref={useCasesRef}>
        <div className="section-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hangi Süreçlerde{" "}
            <span className="text-primary">Kullanılır?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Farklı departmanlarda RPA + AI iş akışlarının uygulama alanları
          </p>
        </div>

        <div className="use-cases-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="use-case-card group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                  useCase.color
                )}
              >
                <useCase.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-4">
                {useCase.title}
              </h3>
              <ul className="space-y-2">
                {useCase.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ==================== HOW WE WORK ==================== */}
      <Section
        ref={stepsRef}
        id="nasil-calisiyoruz"
        className="bg-secondary/30"
      >
        <div className="section-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nasıl <span className="text-primary">Çalışıyoruz?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Adım adım yaklaşımımızla süreçlerinizi otomatikleştiriyoruz
          </p>
        </div>

        <div className="steps-container relative">
          <div ref={timelineLineRef} className="timeline-line hidden lg:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-blue-500" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "step-card relative",
                  "lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
                )}
              >
                <div
                  className={cn(
                    "bg-card border border-border rounded-2xl p-8",
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-primary/30">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div
                  className={cn(
                    "hidden lg:flex items-center justify-center",
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ==================== BENEFITS ==================== */}
      <Section ref={benefitsRef}>
        <div className="section-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sağladığı{" "}
            <span className="text-primary">Başlıca Faydalar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            RPA + AI iş akışlarının işletmenize kazandırdıkları
          </p>
        </div>

        <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ==================== CTA ==================== */}
      <Section className="bg-secondary/30">
        <div
          ref={ctaRef}
          className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 md:p-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Hangi Süreçten Başlayalım?
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            İsterseniz tek bir pilot süreç üzerinden başlayıp, 4-6 hafta içinde
            ilk otomasyon akışınızı canlıya alabiliriz. Pilot sonrasında gerçek
            kazanımları birlikte ölçer, otomasyonu diğer süreçlerinize yayarız.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-all flex items-center gap-2 shadow-lg"
            >
              Ücretsiz Ön Analiz Talep Et
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/iletisim"
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all"
            >
              Mevcut RPA&apos;nızı Güçlendirin
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white/80" />
              Ücretsiz süreç analizi
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white/80" />
              4-6 hafta pilot süre
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white/80" />
              Ölçülebilir sonuçlar
            </span>
          </div>
        </div>
      </Section>
    </main>
  );
}