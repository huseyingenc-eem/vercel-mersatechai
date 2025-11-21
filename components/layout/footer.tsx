"use client";

import React from "react";
import { Mail, Phone, MapPin, ArrowRight, Clock, Shield, Headphones } from "lucide-react";
import { SiWhatsapp, SiLinkedin, SiInstagram } from "react-icons/si";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

// Footer link verileri
const quickLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "AI Otomasyon", href: "/ai-otomasyon" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
];

const serviceLinks = [
  { name: "Satış Otomasyonu", href: "/hizmetler#satis" },
  { name: "Müşteri Desteği", href: "/hizmetler#destek" },
  { name: "Özel İş Akışları", href: "/hizmetler#ozel" },
  { name: "Chatbot Çözümleri", href: "/ai-otomasyon" },
  { name: "API Entegrasyonları", href: "/iletisim" },
];

const aiOtomasyonLinks = [
  { name: "Doküman Dönüştürme", href: "/ai-otomasyon/dokuman-donusturme" },
  { name: "Veri Çıkarma", href: "/ai-otomasyon" },
  { name: "RPA + AI", href: "/ai-otomasyon" },
  { name: "Süreç Otomasyonu", href: "/ai-otomasyon" },
];

const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/905551234567", icon: SiWhatsapp },
  { name: "LinkedIn", href: "https://linkedin.com/company/mersatech", icon: SiLinkedin },
  { name: "Instagram", href: "https://instagram.com/mersatech", icon: SiInstagram },
];

const legalLinks = [
  { name: "Gizlilik Politikası", href: "/gizlilik" },
  { name: "Kullanım Koşulları", href: "/kullanim-kosullari" },
  { name: "KVKK", href: "/kvkk" },
];

// Avantajlar

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-card border-t border-border">
      {/* Ana Footer İçeriği */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">


        {/* Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Şirket Bilgisi */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Yapay zeka destekli chatbot ve otomasyon çözümleri ile işletmenizi geleceğe taşıyoruz.
            </p>

            {/* Sosyal Medya */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center",
                    "bg-muted/50 hover:bg-primary hover:text-primary-foreground",
                    "text-muted-foreground transition-all duration-300"
                  )}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Sayfalar</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Otomasyon */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">AI Otomasyon</h3>
            <ul className="space-y-2.5">
              {aiOtomasyonLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@mersatech.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-primary" />
                  <span>info@mersatech.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+905551234567"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-primary" />
                  <span>+90 555 123 45 67</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/905551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <SiWhatsapp className="w-4 h-4 mt-0.5 text-primary" />
                  <span>WhatsApp Destek</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alt Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} MERSA Technology. Tüm hakları saklıdır.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {legalLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
