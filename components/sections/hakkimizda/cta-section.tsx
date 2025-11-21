"use client";

import { CTASection } from "@/components/shared";
import { CheckCircle } from "lucide-react";

export function HakkimizdaCTASection() {
  return (
    <CTASection
      variant="footer-above"
      heading="Birlikte Çalışmaya Hazır mısınız?"
      description="Projenizi konuşmak ve size nasıl yardımcı olabileceğimizi keşfetmek için iletişime geçin."
      subDescription="İlk görüşme ücretsizdir ve herhangi bir taahhüt gerektirmez."
      primaryButton={{
        text: "İletişime Geçin",
        href: "/iletisim",
      }}
      trustIndicators={[
        { text: "Hızlı Yanıt", icon: CheckCircle },
        { text: "Ücretsiz Danışmanlık", icon: CheckCircle },
        { text: "Şeffaf Süreç", icon: CheckCircle },
      ]}
    />
  );
}
