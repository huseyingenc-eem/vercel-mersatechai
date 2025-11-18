"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="relative w-full bg-white/20 dark:bg-black/50 backdrop-blur-sm border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              AI-powered conversational flows ve akıllı chatbot çözümleri ile müşteri deneyimini optimize ediyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-neutral-900 dark:text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {[
                { name: "Ana Sayfa", href: "/" },
                { name: "Hizmetler", href: "/hizmetler" },
                { name: "Hakkımızda", href: "/hakkimizda" },
                { name: "İletişim", href: "/iletisim" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-neutral-900 dark:text-white font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              {[
                "Satış ve Müşteri Kazanımı",
                "Müşteri Destek Otomasyonu",
                "Özel İş Akışları",
                "Çoklu Platform Desteği",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/hizmetler"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-neutral-900 dark:text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                <span>info@mersa.ai</span>
              </li>
              <li className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
                <span>+90 XXX XXX XX XX</span>
              </li>
              <li className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            © 2024 MERSA Technology. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6">
            {['Gizlilik Politikası', 'Kullanım Koşulları'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
