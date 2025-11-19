"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Workflow,
  GitBranch,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { WobbleCard } from "@components/ui/animations/wobble-card";
import { Container } from "@components/shared/container";
import { useIsMobile } from "@hooks/use-mobile";
import { CardStack } from "@components/ui/card-stack";
import { throttle } from 'lodash';
import { cn } from "@/lib/utils";

const services = [
  {
    id: 0,
    title: "Satış ve Müşteri Kazanımı",
    description:
      "Web sitenize gelen ziyaretçileri otomatik olarak karşılayın, sorularını yanıtlayın ve randevu alın.",
    icon: MessageSquare,
    gradient: "from-green-400 to-emerald-600",
    features: ["Otomatik müşteri toplama", "Randevu yönetimi", "Satış entegrasyonu"],
    advantages: ["%40'a varan potansiyel müşteri artışı", "7/24 kesintisiz hizmet", "Satış ekibi verimliliğinde artış"],
  },
  {
    id: 1,
    title: "Müşteri Destek Otomasyonu",
    description:
      "Sık sorulan soruları otomatik yanıtlayın, destek taleplerini yönlendirin ve müşteri memnuniyetini artırın.",
    icon: Workflow,
    gradient: "from-blue-400 to-cyan-600",
    features: ["7/24 anlık destek", "Çok dilli destek", "Talep yönlendirme"],
    advantages: ["%80'e varan yanıt süresi azalması", "Müşteri memnuniyetinde artış", "Destek maliyetlerinde düşüş"],
  },
  {
    id: 2,
    title: "Özel İş Akışları",
    description:
      "İş süreçlerinize özel AI sohbet robotları. Sipariş takibi, randevu alma, sipariş toplama ve daha fazlası.",
    icon: GitBranch,
    gradient: "from-purple-400 to-pink-600",
    features: ["Özel iş süreçleri", "Çoklu platform desteği", "Sistem entegrasyonu"],
    advantages: ["Operasyonel verimlilik", "Manuel hata oranında azalma", "Tam esneklik ve ölçeklenebilirlik"],
  },
];

const CARDS = services.map((service) => ({
    id: service.id,
    content: (
        <div className={cn("flex flex-col h-full text-white", `bg-gradient-to-br ${service.gradient}`)}>
            <div className="p-6 pb-4">
                <h3 className="font-bold text-xl">
                    {service.title}
                </h3>
                <p className="font-normal text-sm text-white/80 mt-1">
                    {service.description}
                </p>
            </div>
            <div className="flex-grow space-y-2 border-t border-white/20 pt-4 px-6">
                {service.features.map((feature, idx) => (
                    <div key={idx} className="relative pl-5 -ml-5">
                        <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-white/50"></div>
                        <span className="text-sm text-white/90">{feature}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/20 p-6">
                <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-white/90" />
                    <h4 className="text-sm font-semibold text-white/90">Sağladığı Avantajlar</h4>
                </div>
                <div className="flex flex-col gap-1.5">
                    {service.advantages.map((advantage, idx) => (
                         <div key={idx} className="relative pl-5 -ml-5">
                            <span className="absolute left-1 top-1.5 text-xs text-white/80">-</span>
                            <span className="text-xs text-white/80">{advantage}</span>
                         </div>
                    ))}
                </div>
            </div>
        </div>
    ),
}));

const MobileView = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const throttledChangeCard = useCallback(throttle((direction: 'next' | 'prev') => {
        setActiveIndex(prev => {
            if (direction === 'next') {
                return (prev + 1) % CARDS.length;
            }
            return (prev - 1 + CARDS.length) % CARDS.length;
        });
    }, 500, { leading: true, trailing: false }), []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();
            throttledChangeCard(event.deltaY > 0 ? 'next' : 'prev');
        };

        const handleTouchStart = (event: TouchEvent) => {
            touchStartRef.current = event.touches[0].clientY;
        };

        const handleTouchMove = (event: TouchEvent) => {
            event.preventDefault();
        };

        const handleTouchEnd = (event: TouchEvent) => {
            if (touchStartRef.current === null) return;
            const touchEnd = event.changedTouches[0].clientY;
            const delta = touchStartRef.current - touchEnd;
            const swipeThreshold = 50;

            if (Math.abs(delta) > swipeThreshold) {
                throttledChangeCard(delta > 0 ? 'next' : 'prev');
            }
            touchStartRef.current = null;
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        container.addEventListener('touchstart', handleTouchStart, { passive: false });
        container.addEventListener('touchmove', handleTouchMove, { passive: false });
        container.addEventListener('touchend', handleTouchEnd, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [throttledChangeCard]);
    
    const displayedCards = [...CARDS.slice(activeIndex), ...CARDS.slice(0, activeIndex)];

    return (
        <div 
            ref={containerRef}
            className="relative h-[500px] flex items-center justify-center w-full cursor-grab"
        >
            <CardStack items={displayedCards} />
            <div className="absolute right-0 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                {CARDS.map((_, index) => (
                    <div
                        key={index}
                        className={cn(
                            "w-2 h-2 rounded-full bg-muted transition-all duration-300",
                            activeIndex === index && "h-4 bg-primary"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}

export function ServicesSection() {
  const isMobile = useIsMobile();

  return (
    <Container id="services" sectionBg="white" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 dark:text-blue-300">Solutions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            İş Süreçlerinizi Otomatikleştirin
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Satıştan müşteri desteğine, her iş akışınız için AI-powered çözümler
          </p>
        </motion.div>

        {isMobile ? (
            <MobileView />
        ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="col-span-1 lg:col-span-2"
                >
                    <WobbleCard
                    containerClassName="h-full bg-gradient-to-br from-green-400 to-emerald-600 min-h-[350px] lg:min-h-[280px]"
                    className="p-4 sm:p-6"
                    >
                    <div className="max-w-sm">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-left text-balance text-base md:text-lg lg:text-2xl font-semibold tracking-[-0.015em] text-white mb-3">
                        {services[0].title}
                        </h2>
                        <p className="text-left text-sm/6 text-white/80">
                        {services[0].description}
                        </p>
                        <div className="space-y-1.5 mt-4">
                        {services[0].features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                            <div className="w-1 h-1 rounded-full bg-white"></div>
                            <span>{feature}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    </WobbleCard>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="col-span-1"
                >
                    <WobbleCard
                    containerClassName="h-full bg-gradient-to-br from-blue-400 to-cyan-600 min-h-[280px]"
                    className="p-4 sm:p-6"
                    >
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <Workflow className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-left text-balance text-base md:text-lg lg:text-2xl font-semibold tracking-[-0.015em] text-white mb-3">
                        {services[1].title}
                    </h2>
                    <p className="text-left text-sm/6 text-white/80">
                        {services[1].description}
                    </p>
                    <div className="space-y-1.5 mt-4">
                        {services[1].features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                                <div className="w-1 h-1 rounded-full bg-white"></div>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                    </WobbleCard>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="col-span-1 lg:col-span-3"
                >
                    <WobbleCard
                    containerClassName="bg-gradient-to-br from-purple-400 to-pink-600 min-h-[350px] lg:min-h-[280px] xl:min-h-[250px]"
                    className="p-4 sm:p-6"
                    >
                    <div className="max-w-sm">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <GitBranch className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-left text-balance text-base md:text-lg lg:text-2xl font-semibold tracking-[-0.015em] text-white mb-3">
                        {services[2].title}
                        </h2>
                        <p className="text-left text-sm/6 text-white/80">
                        {services[2].description}
                        </p>
                        <div className="space-y-1.5 mt-4">
                        {services[2].features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                                <div className="w-1 h-1 rounded-full bg-white"></div>
                                <span>{feature}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    </WobbleCard>
                </motion.div>
            </div>
        )}
      </Container>
  );
}
