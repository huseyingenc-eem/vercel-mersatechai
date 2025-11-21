"use client";

import React from "react";
import { ScrollActiveList } from "@/components/shared";

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
    <section className="bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollActiveList
          heading="Neden MERSA?"
          headingHighlight="MERSA"
          subheading="İşletmelerin AI ile gerçek değer üretmesini sağlayan farklarımız."
          items={reasons}
          layout="single"
        />
      </div>
    </section>
  );
}
