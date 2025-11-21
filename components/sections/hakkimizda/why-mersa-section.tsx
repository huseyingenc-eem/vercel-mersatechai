"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { H2, Text } from "@components/ui";
import { Container } from "@/components/shared";

const reasons = [
  {
    title: "Gerçekçi ve Uygulanabilir AI Çözümleri",
    description: "Hayali vaatler değil, işe yarayan sistemler kuruyoruz. Piyasadaki abartılı AI söylemlerinden uzak durarak, gerçekten işletmenize değer katacak çözümler geliştiriyoruz."
  },
  {
    title: "Ölçümlenebilir Sonuç Odaklı Yaklaşım",
    description: "Her adımda somut veriler ve metriklerle ilerliyoruz. Başarıyı tahminlerle değil, ölçülebilir KPI'lar ve analitik verilerle değerlendiriyoruz."
  },
  {
    title: "Karmaşık Süreçleri Sadeleştiren Tasarım",
    description: "Teknik karmaşayı arka planda tutup, kullanımı kolaylaştırıyoruz. Son kullanıcının teknik bilgiye ihtiyaç duymadan sistemleri kullanabilmesini sağlıyoruz."
  },
  {
    title: "Hızlı Teslim ve Yüksek Teknik Uzmanlık",
    description: "Agile süreçlerle hem hızlı hem de kaliteli kod üretiyoruz. MVP'den üretime kadar her aşamada profesyonel mühendislik standartlarını uyguluyoruz."
  },
  {
    title: "İnsan Odaklı İletişim, Şeffaf İş Modeli",
    description: "Sürecin her aşamasında açık, net ve ulaşılabiliriz. Gizli maliyetler veya belirsiz süreçler yerine, tam şeffaflık ve sürekli iletişim sunuyoruz."
  }
];

export function WhyMersaSection() {
  return (
    <Container className="py-24">
      {/* Başlık Alanı */}
      <div className="text-center mb-16">
        <H2 className="mb-4">
          Neden <span className="text-primary">MERSA?</span>
        </H2>
        <Text theme="muted" className="max-w-xl mx-auto">
          İşletmelerin AI ile gerçek değer üretmesini sağlayan farklarımız.
        </Text>
      </div>

      {/* Liste Alanı */}
      <div className="flex flex-col gap-6">
        {reasons.map((reason, index) => (
          <ReasonItem key={index} reason={reason} index={index} />
        ))}
      </div>
    </Container>
  );
}

// Her bir satır için ayrı bileşen (Animasyon yönetimi için)
function ReasonItem({ reason, index }: { reason: { title: string; description: string }, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{
        once: false,
        margin: "-20% 0px -20% 0px",
        amount: 0.6
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative flex items-center gap-5 p-6 rounded-2xl"
    >
      {/* Sol Taraftaki Tik İşareti */}
      <div className="relative flex-shrink-0">
        <motion.div
          initial={{
            scale: 1,
            backgroundColor: "transparent",
          }}
          whileInView={{
            scale: 1.1,
            backgroundColor: "hsl(var(--primary))",
          }}
          viewport={{
            once: false,
            margin: "-20% 0px -20% 0px",
            amount: 0.6
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-primary/30"
        >
          <motion.div
            initial={{ color: "hsl(var(--primary))" }}
            whileInView={{ color: "white" }}
            viewport={{
              once: false,
              margin: "-20% 0px -20% 0px",
              amount: 0.6
            }}
            transition={{ duration: 0.4 }}
          >
            <Check className="w-6 h-6 stroke-[3]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Metin Kısmı */}
      <div className="flex-1">
        <Text
          variant="h5"
          className="font-bold mb-1 text-foreground"
        >
          {reason.title}
        </Text>
        <Text
          theme="muted"
          className="text-sm sm:text-base leading-snug"
        >
          {reason.description}
        </Text>
      </div>

    </motion.div>
  );
}