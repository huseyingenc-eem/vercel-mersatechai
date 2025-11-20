"use client";

import React, { useEffect, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  MessageSquare,
  Workflow,
  GitBranch,
  CheckCircle,
  Users,
  Calendar,
  ShoppingCart,
  Layers,
  Sparkles,
  ArrowRight,
  Zap,
  TrendingUp,
  Clock,
  ChevronDown,
} from "lucide-react";

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- SHARED COMPONENTS (Inlined for Single File Requirement) ---

// 1. Container
function Container({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

// 2. Button
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[hsl(var(--primary-hover))]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// 3. Badge
function Badge({ icon, text, className }: { icon?: React.ReactNode; text: string; className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-medium text-secondary-foreground backdrop-blur-sm", className)}>
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      <span>{text}</span>
    </div>
  );
}

// 4. Typography Components (H1, Lead, Tiny)
const H1 = ({ children, className, animate = false }: { children: React.ReactNode; className?: string; animate?: boolean }) => {
  const Component = animate ? motion.h1 : "h1";
  return (
    // @ts-ignore
    <Component
      className={cn("text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight", className)}
      {...(animate ? { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 } } : {})}
    >
      {children}
    </Component>
  );
};

const Lead = ({ children, className, theme = "default" }: { children: React.ReactNode; className?: string; theme?: "default" | "muted" }) => {
  return (
    <p className={cn("text-xl md:text-2xl font-medium leading-relaxed", theme === "muted" ? "text-muted-foreground" : "text-foreground", className)}>
      {children}
    </p>
  );
};

const Tiny = ({ children, className, theme = "default" }: { children: React.ReactNode; className?: string; theme?: "default" | "muted" }) => {
  return (
    <span className={cn("text-xs md:text-sm font-medium", theme === "muted" ? "text-muted-foreground" : "text-foreground", className)}>
      {children}
    </span>
  );
};

// 5. Visual Effects (Spotlight, AnimatedOrbs, TypewriterEffect)
const Spotlight = ({ className, fill = "white" }: { className?: string; fill?: string }) => {
  return (
    <svg
      className={cn("animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
};

const AnimatedOrbs = ({ variant = "subtle" }: { variant?: "subtle" | "minimal" }) => {
  if (variant === "minimal") return null;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/10 blur-[100px] animate-pulse delay-1000" />
    </div>
  );
};

const TypewriterEffect = ({ words, className, cursorClassName }: { words: { text: string; className?: string }[]; className?: string; cursorClassName?: string }) => {
  const [displayedText, setDisplayedText] = useState<string[]>(words.map(() => ""));
  
  // Simple simulation for preview purposes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedText(words.map(w => w.text));
    }, 500);
    return () => clearTimeout(timeout);
  }, [words]);

  return (
    <div className={cn("text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center", className)}>
      {words.map((word, idx) => (
        <span key={idx} className={cn("inline-block mx-1", word.className)}>
          {word.text}
        </span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("inline-block rounded-sm w-[4px] h-8 md:h-12 bg-primary ml-1 align-middle", cursorClassName)}
      />
    </div>
  );
};

// --- PAGE HERO COMPONENT ---
type SectionBgColor = "white" | "gray" | "black" | "gradient" | "transparent";

interface PageHeroProps {
  id?: string;
  sectionBg?: SectionBgColor;
  badge?: {
    icon?: React.ReactNode;
    text: string;
  };
  title: string | React.ReactNode | { text: string; className?: string }[];
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundVariant?: "default" | "ai" | "gradient" | "dots" | "minimal" | "none";
  className?: string;
  children?: React.ReactNode;
}

function PageHero({
  id: customId,
  sectionBg = "transparent",
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundVariant = "default",
  className = "",
  children,
}: PageHeroProps) {
  const generatedId = useId();
  // id used for potential scroll spy logic (omitted for standalone simplicity)

  const getBackgroundElements = () => {
    if (backgroundVariant === "none") return null;
    switch (backgroundVariant) {
      case "ai":
      case "gradient":
        return (
          <>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            {/* Spotlight fill rengi tema rengi olan turuncu (#fd8f52) */}
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#fd8f52" />
            <AnimatedOrbs variant="subtle" />
          </>
        );
      case "minimal":
        return (
          <>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <AnimatedOrbs variant="minimal" />
          </>
        );
      case "dots":
        return (
          <>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px]" />
          </>
        );
      default:
        return <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />;
    }
  };

  const renderTitle = () => {
    if (Array.isArray(title)) {
      return <TypewriterEffect words={title} className="mb-4 sm:mb-6" />;
    }
    if (typeof title === 'string') {
      const words = title.split(" ").map(text => ({ text }));
      return <TypewriterEffect words={words} className="mb-4 sm:mb-6" />;
    }
    return (
      // DÜZELTME: Gradient sınıfları kaldırıldı, düz yazı rengi (text-foreground) kullanılıyor.
      <H1 animate className="mb-4 sm:mb-6 text-foreground pb-1">
        {title}
      </H1>
    );
  };

  return (
    <div className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", className)}>
      {backgroundVariant !== "none" && (
        <div className="absolute inset-0 w-full h-full z-0">{getBackgroundElements()}</div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 md:py-40 text-center">
        <AnimatePresence>
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 sm:mb-8 flex justify-center"
            >
              <Badge icon={badge.icon} text={badge.text} />
            </motion.div>
          )}
        </AnimatePresence>

        {renderTitle()}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Lead theme="muted" className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            {description}
          </Lead>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCta && (
                <Button
                  size="lg"
                  asChild
                  className="group glow-primary transition-all duration-300 hover:scale-105"
                >
                  <a href={primaryCta.href}>
                    <span className="relative z-10 flex items-center">
                      {primaryCta.text}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="hover:bg-accent hover:text-accent-foreground"
                >
                  <a href={secondaryCta.href}>{secondaryCta.text}</a>
                </Button>
              )}
            </div>
          )}
        </motion.div>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="flex flex-col items-center"
        >
          <Tiny theme="muted" className="tracking-wider uppercase mb-2 font-semibold">
            Aşağı Kaydır
          </Tiny>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// --- MAIN PAGE COMPONENT ---

type Sector = {
  key: string;
  title: string;
  problem: string;
  solution: string;
  details: string;
  bullets: string[];
  accent: string;
  icon: any;
};

const sectors: Sector[] = [
  {
    key: "ecommerce",
    title: "E‑Ticaret",
    problem: "Ziyaretçiler soru sorup yanıt alamıyor",
    solution: "7/24 ürün danışmanlığı + sepet hatırlatıcısı",
    details:
      "E‑ticaret siteleri için AI destekli ürün asistanı, kullanıcıyı doğru ürüne yönlendirir, stok ve varyant bilgisi sunar, ve terkedilmiş sepetlerde yeniden etkileşim kurar. Satın alma yolculuğunu otomatikleştirerek dönüşüm oranlarını artırır.",
    bullets: [
      "Ürün öneri motoru (context-aware)",
      "Terkedilmiş sepet hatırlatma akışları",
      "Sipariş takibi & durum güncellemeleri",
      "Kampanya/kupon tetikleme",
    ],
    accent: "from-emerald-500 to-teal-600",
    icon: ShoppingCart,
  },
  {
    key: "b2b",
    title: "B2B Şirketler",
    problem: "Lead'ler kaybolup gidiyor",
    solution: "Otomatik lead toplama + CRM entegrasyonu",
    details:
      "B2B satış döngüleri uzun ve karmaşıktır; AI tabanlı formlar ve sohbet akışları lead toplama sürecini otomatikleştirir, doğru alanları yakalar ve anında CRM'e iletir. Böylece satış ekipleri yüksek kaliteli leadlere odaklanır.",
    bullets: [
      "Kvalifikasyon & scoring otomasyonu",
      "Anlık CRM senkronizasyonu (HubSpot/Salesforce)",
      "E‑posta / bildirim tetiklemeleri",
      "Toplu raporlama ve etkinlik takibi",
    ],
    accent: "from-blue-500 to-indigo-600",
    icon: Users,
  },
  {
    key: "services",
    title: "Hizmet İşletmeleri",
    problem: "Rezervasyon takibi çok zor",
    solution: "WhatsApp üzerinden otomatik rezervasyon",
    details:
      "Randevu, rezervasyon ve hizmet takibi işletmeler için karmaşıktır. WhatsApp ve Telegram üzerinden çalışan akıllı asistan, rezervasyon alır, hatırlatmalar gönderir ve takvime entegre olur — insan hatasını azaltır.",
    bullets: [
      "Otomatik rezervasyon & iptal akışı",
      "Takvim entegrasyonu (Google/Outlook)",
      "Hatırlatıcı & follow‑up mesajları",
      "Çoklu dil desteği",
    ],
    accent: "from-violet-500 to-purple-600",
    icon: Calendar,
  },
  {
    key: "agencies",
    title: "Ajanslar",
    problem: "Çoklu müşteri takibi karmaşık",
    solution: "Merkezi lead toplama + raporlama",
    details:
      "Ajanslar birden fazla müşteriyle çalışırken süreçler dağılabilir. Merkezi dashboard ve otomatik raporlama ile tüm müşteri etkileşimlerini tek noktadan izleyin ve performans metriklerine göre hızlı aksiyon alın.",
    bullets: [
      "Müşteri bazlı raporlar",
      "Centralized lead havuzu",
      "Beyaz etiket entegrasyonları",
      "API & webhook desteği",
    ],
    accent: "from-indigo-500 to-blue-600",
    icon: Layers,
  },
  {
    key: "education",
    title: "Eğitim",
    problem: "Öğrenci soruları yanıtsız kalıyor",
    solution: "Otomatik soru‑cevap + kayıt sistemi",
    details:
      "Eğitim kurumları öğrencilerin sorularına hızlı cevap vererek bağlılığı artırır. Sınıf bazlı SSS, ödev hatırlatıcıları ve kayıt formları ile manuel işleri azaltın.",
    bullets: [
      "Sınıf/ödev hatırlatmaları",
      "Soru‑cevap botu (konu bazlı)",
      "Öğrenci kayıt otomasyonu",
      "Performans takibi ve geri bildirim",
    ],
    accent: "from-amber-500 to-orange-600",
    icon: MessageSquare,
  },
  {
    key: "pro",
    title: "Profesyonel Hizmetler",
    problem: "Randevu yönetimi manuel",
    solution: "Akıllı randevu + hatırlatma sistemi",
    details:
      "Hukuk, muhasebe ve danışmanlık gibi profesyonel hizmetlerde randevu ve belge akışı kritik. AI destekli asistan randevu planlar, ön bilgi toplar ve hatırlatmalarla no‑show'u azaltır.",
    bullets: [
      "Randevu planlama & senkronizasyon",
      "Doküman toplama akışları",
      "Ödeme hatırlatmaları",
      "Müşteri ön bilgi formları",
    ],
    accent: "from-rose-500 to-pink-600",
    icon: CheckCircle,
  },
];

const services = [
  {
    title: "Satış ve Müşteri Kazanımı",
    icon: MessageSquare,
    gradient: "from-emerald-500 to-teal-600",
    description:
      "Web sitenize gelen ziyaretçileri otomatik olarak karşılayın ve satış fırsatlarına dönüştürün.",
    features: [
      "7/24 ziyaretçi karşılama",
      "Otomatik soru-cevap",
      "Randevu yönetimi",
      "Potansiyel müşteri toplama",
      "Satış ekibine otomatik bildirim",
      "CRM entegrasyonu",
    ],
  },
  {
    title: "Müşteri Destek Otomasyonu",
    icon: Workflow,
    gradient: "from-blue-500 to-indigo-600",
    description:
      "Müşteri sorularını anında yanıtlayın ve destek ekibinizin yükünü azaltın.",
    features: [
      "Sık sorulan soruları otomatik yanıtlama",
      "Çok dilli destek",
      "Telegram & WhatsApp entegrasyonu",
      "Talep kategorizasyonu",
      "İnsan desteğine yönlendirme",
    ],
  },
  {
    title: "Özel İş Akışları",
    icon: GitBranch,
    gradient: "from-violet-500 to-purple-600",
    description:
      "İşinize özel tasarlanmış AI sohbet robotları ile her türlü iş sürecini otomatikleştirin.",
    features: [
      "Özelleştirilmiş konuşma akışları",
      "Sipariş alma ve takip",
      "Rezervasyon yönetimi",
      "Anket ve geri bildirim toplama",
    ],
  },
];

export default function HizmetlerPage() {
  return (
    <div className="w-full overflow-hidden bg-background text-foreground">
      
      {/* Hero */}
      <PageHero
        sectionBg="gradient" 
        backgroundVariant="gradient"
        badge={{
          icon: <Sparkles className="w-4 h-4 text-primary" />,
          text: "AI Destekli Çözümler",
        }}
        title={
          <>
            Sektörünüze Özel
            <br />
            {/* DÜZELTME: Burada da text-gradient sınıfını kaldırdım. */}
            <span className="font-extrabold pb-2 text-primary">
              AI Otomasyon Çözümleri
            </span>
          </>
        }
        description={
          "Her sektör için özelleştirilmiş AI otomasyon çözümleri — ziyaretçiden müşteriye, rezervasyondan CRM’e uçtan uca çözümler."
        }
        primaryCta={{ text: "Ücretsiz Danışmanlık", href: "/iletisim" }}
        secondaryCta={{ text: "Sektörleri İncele", href: "#sektorler" }}
      />

      {/* Sektör Kartları */}
      <div id="sektorler" className="py-20 bg-background">
        <Container className="space-y-32">
          {sectors.map((sector, idx) => (
            <motion.div
              key={sector.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Dekoratif gradient arka plan */}
              <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.1, 0.15, 0.1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${
                    idx % 2 === 0 ? "left-0" : "right-0"
                  } top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br ${
                    sector.accent
                  } rounded-full blur-[100px]`}
                />
              </div>

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* İçerik */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  {/* Icon badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-br ${
                        sector.accent
                      } shadow-lg`}
                    >
                      <sector.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {sector.key}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    {sector.title}
                  </h3>

                  <div className="mb-6 p-4 rounded-xl bg-card border border-border shadow-sm">
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-semibold text-foreground">Sorun:</span> {sector.problem}
                    </p>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">
                      <span className="font-semibold">Çözüm:</span> {sector.solution}
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {sector.details}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {sector.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/iletisim"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${sector.accent} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Özel Entegrasyon Talebi
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-border text-foreground font-semibold hover:border-primary/50 hover:bg-secondary transition-all duration-300"
                    >
                      Daha Fazla Bilgi
                    </a>
                  </div>
                </div>

                {/* Görsel Kart */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        sector.accent
                      } rounded-3xl blur-2xl opacity-20`}
                    />

                    <div className="relative p-8 rounded-3xl bg-card border border-border shadow-xl">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${
                          sector.accent
                        } flex items-center justify-center shadow-lg`}
                      >
                        <sector.icon className="w-10 h-10 text-white" />
                      </div>

                      <h4 className="text-xl font-bold text-foreground text-center mb-3">
                        {sector.solution}
                      </h4>

                      <p className="text-sm text-muted-foreground text-center mb-6">
                        Hızlı kurulum, esnek entegrasyonlar ve ölçeklenebilir altyapı
                        ile kısa sürede yayına alınır.
                      </p>

                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">
                            24/7
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Aktif
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-500 mb-1">
                            %85
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Otomasyon
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-500 mb-1">
                            5dk
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Kurulum
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Container>
      </div>

      {/* Hizmetler Bölümü */}
      <div className="py-20 bg-secondary/30">
        <Container>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Kapsamlı Hizmet Portföyümüz
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                İş akışınızı otomatikleştirip zaman kazanın
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/iletisim"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                  >
                    Detaylı Bilgi
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Neden Bizi Seçmelisiniz */}
      <div className="py-20 bg-background">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rakiplerimizden bizi ayıran özellikler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Hızlı Kurulum",
                desc: "5 dakikada kurulum, aynı gün yayına alma",
                gradient: "from-yellow-500 to-orange-600",
              },
              {
                icon: TrendingUp,
                title: "Ölçeklenebilir",
                desc: "İşiniz büyüdükçe birlikte büyüyoruz",
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                icon: Clock,
                title: "7/24 Destek",
                desc: "Her zaman yanınızdayız",
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                icon: CheckCircle,
                title: "Garanti",
                desc: "%100 memnuniyet garantisi",
                gradient: "from-purple-500 to-pink-600",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-4 shadow-lg`}
                >
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Final CTA */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary-warm" /> 

        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center text-primary-foreground">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-extrabold mb-4"
            >
              İşiniz İçin Hazır mısınız?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-lg max-w-2xl mx-auto opacity-90"
            >
              MersaTech ile süreçlerinizi otomatikleştirin, müşteri memnuniyetinizi artırın ve operasyonel maliyetleri düşürün. Ücretsiz keşif görüşmesi için bize ulaşın.
            </motion.p>

            <div className="flex justify-center gap-4">
              <a
                href="/iletisim"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Ücretsiz Keşif Çağrısı
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/fiyatlandirma"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Paketleri Gör
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}