"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer"; // Sizin asıl Footer dosyanızın yolu
import { useEffect, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export function SiteFooter() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Sayfa her değiştiğinde ScrollTrigger'ı tazele
    // Bu, yeni sayfanın uzunluğunu GSAP'in doğru hesaplamasını sağlar
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500); // Yarım saniye bekle ki içerik yüklensin

    return () => clearTimeout(timer);
  }, [pathname]);

  // KEY ÖZELLİĞİ BURADA:
  // pathname değiştiğinde React bu bileşeni ve içindeki Footer'ı
  // tamamen yok edip sıfırdan tekrar oluşturur.
  return <Footer key={pathname} />;
}