"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { InfiniteScroll } from "@components/ui/backgrounds/infinite-scroll";
import { Container } from "@components/shared/container";
import {
  SiTelegram,
  SiWhatsapp,
  SiFacebook,
  SiLinkedin,
  SiInstagram,
  SiHubspot,
  SiSlack,
  SiGooglesheets,
  SiZapier,
  SiMake,
  SiSalesforce,
  SiNotion,
  SiTrello,
  SiAsana,
  SiZendesk,
} from "react-icons/si";
import { MdGroups } from "react-icons/md";
import type { IconType } from "react-icons";
import { useIsMobile } from "@/hooks/use-mobile";

interface Integration {
  name: string;
  category: string;
  description: string;
  color: string;
  icon: IconType;
}

const integrations: Integration[] = [
  { name: "Telegram", category: "Mesajlaşma", description: "Telegram botları ile müşterilerinizle anlık iletişim", color: "from-blue-500 to-cyan-500", icon: SiTelegram },
  { name: "WhatsApp", category: "Mesajlaşma", description: "WhatsApp Business API entegrasyonu", color: "from-green-500 to-emerald-500", icon: SiWhatsapp },
  { name: "Facebook", category: "Lead Kaynağı", description: "Facebook Messenger ve lead form entegrasyonu", color: "from-blue-600 to-indigo-600", icon: SiFacebook },
  { name: "LinkedIn", category: "Lead Kaynağı", description: "LinkedIn lead generation ve mesajlaşma", color: "from-blue-700 to-blue-800", icon: SiLinkedin },
  { name: "Instagram", category: "Mesajlaşma", description: "Instagram Direct Message otomasyonu", color: "from-pink-500 to-rose-500", icon: SiInstagram },
  { name: "HubSpot", category: "CRM", description: "HubSpot CRM ve marketing automation", color: "from-orange-500 to-red-500", icon: SiHubspot },
  { name: "Salesforce", category: "CRM", description: "Salesforce CRM entegrasyonu", color: "from-cyan-500 to-blue-600", icon: SiSalesforce },
  { name: "Notion", category: "Veri", description: "Notion workspace entegrasyonu", color: "from-gray-700 to-gray-900", icon: SiNotion },
  { name: "Slack", category: "İletişim", description: "Slack workspace entegrasyonu", color: "from-purple-500 to-pink-500", icon: SiSlack },
  { name: "Microsoft Teams", category: "İletişim", description: "Teams chatbot ve bildirimler", color: "from-blue-500 to-purple-500", icon: MdGroups },
  { name: "Google Sheets", category: "Veri", description: "Otomatik veri senkronizasyonu", color: "from-green-500 to-lime-500", icon: SiGooglesheets },
  { name: "Trello", category: "Proje Yönetimi", description: "Trello board otomasyonu", color: "from-blue-500 to-blue-700", icon: SiTrello },
  { name: "Asana", category: "Proje Yönetimi", description: "Asana task yönetimi", color: "from-red-500 to-pink-500", icon: SiAsana },
  { name: "Zendesk", category: "Müşteri Desteği", description: "Zendesk ticket sistemi entegrasyonu", color: "from-green-600 to-teal-600", icon: SiZendesk },
  { name: "Zapier", category: "Otomasyon", description: "5000+ uygulama ile bağlantı", color: "from-orange-500 to-amber-500", icon: SiZapier },
  { name: "Make", category: "Otomasyon", description: "Karmaşık iş akışı otomasyonları", color: "from-purple-600 to-indigo-600", icon: SiMake },
];

const firstRow = integrations.slice(0, 8);
const secondRow = integrations.slice(8, 16);

export function IntegrationsSection() {
  // 📱 Burada senin hook'unu KULLANIYORUZ, değiştirmiyoruz
  const isMobile = useIsMobile();

  return (
      <Container id="integrations" sectionBg="slate" className="py-20">
        {/* Content wrapper */}
        <div className="relative">
          {/* Header */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 dark:text-blue-300">
              Integrations
            </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              100+ Platform Entegrasyonu
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Kullandığınız tüm araçlarla sorunsuz entegrasyon
            </p>
          </motion.div>

          {/* Full-width Scroll Container */}
          <div
              className={
                isMobile
                    ? "relative w-full"
                    : "relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
              }
          >
            {/* Sol / Sağ blur – mobilde gizli */}
            {!isMobile && (
                <div className="pointer-events-none">
                  <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full blur-3xl blur-[120px]  w-60 h-60 bg-secondary/40 dark:bg-black/30"
                  />
                  <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full blur-3xl blur-[120px]  w-60 h-60 bg-secondary/40 dark:bg-black/30"
                  />
                </div>
            )}

            {/* İlk Sıra - Sola Kayıyor */}
            <div className="mb-6 sm:mb-8">
              <InfiniteScroll direction="left" speed={isMobile ? 20 : 30}>
                {firstRow.map((integration, index) => (
                    <div
                        key={`first-${index}`}
                        className="min-w-[260px] sm:min-w-[320px] md:min-w-[380px] px-3"
                    >
                      <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm hover:from-card hover:to-muted transition-all duration-300">
                        <div
                            className={`flex-shrink-0 rounded-xl bg-gradient-to-br ${integration.color} shadow-lg flex items-center justify-center
                      ${
                                isMobile
                                    ? "w-10 h-10 p-2.5"
                                    : "w-12 h-12 sm:w-14 sm:h-14 p-3"
                            }`}
                        >
                          <integration.icon className="w-full h-full text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground">
                              {integration.name}
                            </h3>
                            <span className="text-[10px] sm:text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          {integration.category}
                        </span>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                    </div>
                ))}
              </InfiniteScroll>
            </div>

            {/* İkinci Sıra - Sağa Kayıyor */}
            <div className="mb-12">
              <InfiniteScroll direction="right" speed={isMobile ? 22 : 35}>
                {secondRow.map((integration, index) => (
                    <div
                        key={`second-${index}`}
                        className="min-w-[260px] sm:min-w-[320px] md:min-w-[380px] px-3"
                    >
                      <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm hover:from-card hover:to-muted transition-all duration-300">
                        <div
                            className={`flex-shrink-0 rounded-xl bg-gradient-to-br ${integration.color} shadow-lg flex items-center justify-center
                      ${
                                isMobile
                                    ? "w-10 h-10 p-2.5"
                                    : "w-12 h-12 sm:w-14 sm:h-14 p-3"
                            }`}
                        >
                          <integration.icon className="w-full h-full text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground">
                              {integration.name}
                            </h3>
                            <span className="text-[10px] sm:text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          {integration.category}
                        </span>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                    </div>
                ))}
              </InfiniteScroll>
            </div>
          </div>

          {/* CTA */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              Aradığınız entegrasyonu bulamadınız mı?
            </p>
            <a
                href="/iletisim"
                className="inline-block px-6 py-3 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 text-blue-500 dark:text-blue-400 rounded-lg transition-all"
            >
              Özel Entegrasyon Talebi
            </a>
          </motion.div>
        </div>
      </Container>
  );
}
