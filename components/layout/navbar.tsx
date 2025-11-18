"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, MegaMenu } from "@/components/ui";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";
import { siteConfig } from "@/config/site-config";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

/**
 * @brief Navbar Component
 * @description
 * Sitenin ana navigasyon barıdır. Desktop ve mobil görünümleri yönetir.
 * - Desktop: Yatay menü ve MegaMenu component'ini kullanır.
 * - Mobil: Ayrı bir MobileMenu component'ini render eder.
 * - Scroll ve menü durumuna göre arkaplanını ayarlar.
 */
export function Navbar() {
  // --- STATE MANAGEMENT ---
  const [isOpen, setIsOpen] = useState(false); // Mobil menünün genel açık/kapalı durumu
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null); // Hangi ana kategorinin seçildiği (mobil + desktop)
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null); // MegaMenu içindeki 3. seviye menü
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // --- HOOKS & EFFECTS ---

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dışarı tıklandığında desktop menüyü kapat (mobilde çalışmaz)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Mobilde bu handler çalışmasın
      if (isMobile) return;

      const target = event.target as HTMLElement;

      // Nav içinde veya mobil menü içinde tıklanmışsa kapatma
      if (
        target.closest('nav') ||
        target.closest('[data-mobile-menu]')
      ) {
        return;
      }

      // Desktop menüyü kapat
      setOpenSubmenu(null);
      setOpenNestedSubmenu(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  // Scroll dinleyicisi
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 5);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // --- UTILITY FUNCTIONS ---

  const getNavbarBackground = () => {
    // Desktop menü açıksa veya mobil menü açıksa, arkaplan opak
    if (openSubmenu || isOpen) {
      return 'bg-white dark:bg-neutral-900';
    }
    // Sayfa kaydırıldıysa, yarı saydam arkaplan
    if (isScrolled) {
      return 'bg-background/80 dark:bg-black/80 backdrop-blur-md';
    }
    // En üstte ve menüler kapalıyken tamamen saydam
    return 'bg-transparent';
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
    setOpenNestedSubmenu(null);
  };

  // --- RENDER ---
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${getNavbarBackground()} ${
          isScrolled || openSubmenu || (isOpen && isMobile)
            ? 'border-b border-neutral-200/50 dark:border-neutral-800/50'
            : 'border-b border-transparent'
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Sol: Logo (içinde geri butonu olabilir) */}
            <div className="flex items-center gap-3">
              <Logo
                showBackButton={isMobile && isOpen && (!!openSubmenu || !!openNestedSubmenu)}
                onBackClick={() => {
                  if (openNestedSubmenu) {
                    setOpenNestedSubmenu(null);
                  } else if (openSubmenu) {
                    setOpenSubmenu(null);
                  }
                }}
              />
            </div>

            {/* Orta: Desktop Menü */}
            {!isMobile && (
              <div className="hidden md:flex items-center gap-8">
                {siteConfig.nav.main.map((item) => (
                  <div key={item.label} className="relative flex items-center">
                    {item.children ? (
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                        className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openSubmenu === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm font-medium"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Sağ: Aksiyon Butonları */}
            <div className="flex items-center gap-3">
              {mounted && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-neutral-700" />}
                </motion.button>
              )}

              <div className="hidden sm:block">
                <Button size="sm" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                  Demo İsteyin
                </Button>
              </div>

              {isMobile && (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-neutral-700 dark:text-neutral-300 relative z-50"
                  aria-label="Menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mega Menu (Desktop) */}
        <AnimatePresence>
          {openSubmenu && !isMobile && (
            <div className="hidden md:block">
              {siteConfig.nav.main.map((item) => {
                if (item.label === openSubmenu && item.children) {
                  return (
                    <MegaMenu
                      key={item.label}
                      items={item.children}
                      openNestedSubmenu={openNestedSubmenu}
                      setOpenNestedSubmenu={setOpenNestedSubmenu}
                      isMobile={false}
                    />
                  );
                }
                return null;
              })}
            </div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isOpen && isMobile}
        openSubmenu={openSubmenu}
        setOpenSubmenu={setOpenSubmenu}
        openNestedSubmenu={openNestedSubmenu}
        setOpenNestedSubmenu={setOpenNestedSubmenu}
        closeMobileMenu={closeMobileMenu}
      />
    </>
  );
}

