"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteScroll } from "@components/ui/backgrounds/infinite-scroll";
import { Container, SectionHeader } from "@components/shared";
import { useIsMobile } from "@/hooks/use-mobile";
import { integrationsData } from "./data";

export function IntegrationsSection() {
  const isMobile = useIsMobile();
  const integrations = integrationsData.integrations;
  const firstRow = integrations.slice(0, 8);
  const secondRow = integrations.slice(8, 16);

  return (
    <Container id="integrations" sectionBg="white" className="">
      <div className="relative">
        {/* Header */}
        <div className="mb-16">
          <SectionHeader
            badge={integrationsData.badge.text}
            heading={integrationsData.heading}
            subheading={integrationsData.subheading}
          />
        </div>

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
              <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full blur-[120px] w-60 h-60 bg-secondary/40 dark:bg-background/40" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full blur-[120px] w-60 h-60 bg-secondary/40 dark:bg-background/40" />
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
                  <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-card/60 to-muted/30 backdrop-blur-sm hover:from-card hover:to-muted transition-all duration-300 card-shadow">
                    <div
                      className={`flex-shrink-0 rounded-xl bg-gradient-to-br ${integration.color} shadow-lg flex items-center justify-center ${
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
                  <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-card/60 to-muted/30 backdrop-blur-sm hover:from-card hover:to-muted transition-all duration-300 card-shadow">
                    <div
                      className={`flex-shrink-0 rounded-xl bg-gradient-to-br ${integration.color} shadow-lg flex items-center justify-center ${
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
            {integrationsData.ctaDescription}
          </p>
          <a
            href={integrationsData.ctaHref}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/15 border border-primary/30 text-primary font-medium transition-all shadow-sm hover:shadow-md"
          >
            {integrationsData.ctaText}
          </a>
        </motion.div>
      </div>
    </Container>
  );
}
