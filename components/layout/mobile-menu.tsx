"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { ChevronRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { Text } from "@/components/ui/typography/text";

interface MobileMenuProps {
  isOpen: boolean;
  openSubmenu: string | null;
  setOpenSubmenu: (label: string | null) => void;
  openNestedSubmenu: string | null;
  setOpenNestedSubmenu: (label: string | null) => void;
  closeMobileMenu: () => void;
}

/**
 * @brief Mobile Menu Component
 * @description
 * Mega menü tarzında mobil menü - Carousel en üstte, liste altında
 * Yumuşak geçişlerle 3 seviyeli navigasyon
 */
export function MobileMenu({
  isOpen,
  openSubmenu,
  setOpenSubmenu,
  openNestedSubmenu,
  setOpenNestedSubmenu,
  closeMobileMenu,
}: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  // Seçili kategoriler
  const selectedCategory = siteConfig.nav.main.find(item => item.label === openSubmenu);
  const selectedSubCategory = selectedCategory?.children?.find(child => child.label === openNestedSubmenu);

  // İlk açılışta (Ana menü)
  if (!openSubmenu) {
    return (
      <motion.div
        data-mobile-menu
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-white dark:bg-neutral-900 flex flex-col"
        style={{ top: '64px' }}
      >
        {/* Ana menü listesi */}
        <div className="flex-1 overflow-y-auto pb-32 px-6 py-6">
          <div className="space-y-2">
            {siteConfig.nav.main.map((item) => {
              if (item.children) {
                return (
                  <button
                    key={item.label}
                    onClick={() => setOpenSubmenu(item.label)}
                    className="w-full flex items-center justify-between py-4 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all text-left"
                  >
                    <Text variant="small" theme="default" className="font-medium">
                      {item.label}
                    </Text>
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </button>
                );
              } else {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="w-full flex items-center justify-between py-4 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all text-left"
                  >
                    <Text variant="small" theme="default" className="font-medium">
                      {item.label}
                    </Text>
                  </Link>
                );
              }
            })}
          </div>
        </div>

        {/* Alt Sabit Kart */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-50 dark:bg-neutral-800 p-6 border-t border-slate-200 dark:border-neutral-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <Text variant="small" theme="default" className="font-bold">
                Hemen İletişime Geçin
              </Text>
              <Text variant="tiny" theme="muted">
                Size özel çözümler sunalım
              </Text>
            </div>
          </div>
          <Link href="/iletisim" onClick={closeMobileMenu}>
            <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
              Demo İsteyin
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  // 2. Seviye: Alt kategoriler (openSubmenu var ama openNestedSubmenu yok)
  if (openSubmenu && !openNestedSubmenu && selectedCategory?.children) {
    return (
      <motion.div
        data-mobile-menu
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-white dark:bg-neutral-900 flex flex-col"
        style={{ top: '64px' }}
      >
        {/* Alt kategoriler listesi */}
        <div className="flex-1 overflow-y-auto pb-32 px-6 py-6">
          <div className="space-y-2">
            {/* Başlık - Tıklanabilir, Aynı Hizada */}
            <Link
              href={selectedCategory.href || '#'}
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-between py-4 px-4 rounded-lg bg-primary/5 hover:bg-primary/10 dark:bg-primary/10 dark:hover:bg-primary/20 transition-all text-left mb-2"
            >
              <Text variant="small" theme="primary" className="font-bold">
                {openSubmenu}
              </Text>
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Alt Kategoriler */}
            {selectedCategory.children.map((child) => {
              if (child.children && child.children.length > 0) {
                return (
                  <button
                    key={child.label}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenNestedSubmenu(child.label);
                    }}
                    className="w-full flex items-center justify-between py-4 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all text-left"
                  >
                    <Text variant="small" theme="default" className="font-medium flex-1">
                      {child.label}
                    </Text>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 text-primary text-xs font-semibold">
                        {child.children.length}
                      </span>
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                  </button>
                );
              } else {
                return (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={closeMobileMenu}
                    className="w-full flex items-center justify-between py-4 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all text-left"
                  >
                    <Text variant="small" theme="default" className="font-medium">
                      {child.label}
                    </Text>
                  </Link>
                );
              }
            })}
          </div>
        </div>

        {/* Alt Sabit Kart */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-50 dark:bg-neutral-800 p-6 border-t border-slate-200 dark:border-neutral-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <Text variant="small" theme="default" className="font-bold">
                Hemen İletişime Geçin
              </Text>
              <Text variant="tiny" theme="muted">
                Size özel çözümler sunalım
              </Text>
            </div>
          </div>
          <Link href="/iletisim" onClick={closeMobileMenu}>
            <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
              Demo İsteyin
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  // 3. Seviye: Alt kategorinin detayları
  if (openNestedSubmenu && selectedSubCategory?.children) {
    return (
      <motion.div
        data-mobile-menu
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-white dark:bg-neutral-900 flex flex-col"
        style={{ top: '64px' }}
      >
        {/* Detaylar listesi */}
        <div className="flex-1 overflow-y-auto pb-32 px-6 py-6">
          <div className="space-y-2">
            {/* Başlık - Tıklanabilir, Aynı Hizada */}
            <Link
              href={selectedSubCategory.href || '#'}
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-between py-4 px-4 rounded-lg bg-primary/5 hover:bg-primary/10 dark:bg-primary/10 dark:hover:bg-primary/20 transition-all text-left mb-2"
            >
              <Text variant="small" theme="primary" className="font-bold">
                {openNestedSubmenu}
              </Text>
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Hizmetler */}
            {selectedSubCategory.children.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="block py-4 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all"
              >
                <Text variant="small" className="font-medium">{item.label}</Text>
              </Link>
            ))}
          </div>
        </div>

        {/* Alt Sabit Kart */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-50 dark:bg-neutral-800 p-6 border-t border-slate-200 dark:border-neutral-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <Text variant="small" theme="default" className="font-bold">
                Hemen İletişime Geçin
              </Text>
              <Text variant="tiny" theme="muted">
                Size özel çözümler sunalım
              </Text>
            </div>
          </div>
          <Link href="/iletisim" onClick={closeMobileMenu}>
            <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
              Demo İsteyin
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  return null;
}

