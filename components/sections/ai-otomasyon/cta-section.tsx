import React from "react";
import { CTASection as SharedCTASection } from "@components/shared";
import { ctaData } from "./data";

export function CTASection() {
  return (
    <SharedCTASection
      variant="default"
      heading={ctaData.heading}
      description={ctaData.description}
      subDescription={ctaData.subDescription}
      primaryButton={{
        text: ctaData.primaryCta.text,
        icon: ctaData.primaryCta.icon,          // "message"
        href: "/iletisim",
      }}
      secondaryButton={{
        text: ctaData.secondaryCta.text,
        icon: ctaData.secondaryCta.icon,        // "phone"
        href: "https://wa.me/YOUR_PHONE_NUMBER",
      }}
      trustIndicators={ctaData.trustIndicators}
      id="contact"
    />
  );
}
