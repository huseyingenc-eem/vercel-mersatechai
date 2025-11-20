import React from "react";
import { CTASection as SharedCTASection } from "@components/shared";
import { ctaData } from "./data";

/**
 * Home page CTA Section
 * Uses the shared CTASection component with home-specific data
 */
export function CTASection() {
  return (
    <SharedCTASection
      variant="default"
      heading={ctaData.heading}
      description={ctaData.description}
      subDescription={ctaData.subDescription}
      primaryButton={{
        text: ctaData.primaryCta.text,
        // icon: ctaData.primaryCta.icon,
        href: "/iletisim",
      }}
      secondaryButton={{
        text: ctaData.secondaryCta.text,
        // icon: ctaData.secondaryCta.icon,
        href: "https://wa.me/YOUR_PHONE_NUMBER",
      }}
      trustIndicators={ctaData.trustIndicators}
      id="contact"
    />
  );
}
