"use client";

import React from "react";
import { Sparkles, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui";
import { SectionHeader } from "@/components/shared/section-header";

const coreValues = [
  {
    icon: Sparkles,
    title: "Merak",
    description: 'Her "neden?" ve "nasıl olur?" sorusu yeni bir çözümün ilk adımıdır. Bu merak bizi sürekli daha iyi AI sistemleri kurmaya yönlendirir.'
  },
  {
    icon: Zap,
    title: "Sadelik",
    description: "Eğer bir çözümü kullanmak için eğitim şartsa, yanlış yapıyoruz demektir. Tüm sistemleri herkesin kullanabileceği kadar sade tasarlarız."
  },
  {
    icon: Users,
    title: "Verimlilik",
    description: "Tekrarlayan işleri AI'nin, değer üreten işleri insanların yapması gerektiğine inanıyoruz. Bu yüzden süreçleri otomatikleştirmek en büyük tutkumuz."
  }
];

export function CoreValuesSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <SectionHeader
            heading="Değerlerimiz"
            subheading="MERSA'yı ayakta tutan temel prensipler"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <Card
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
              variant="elevated"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

