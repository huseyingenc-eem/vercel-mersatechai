"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { NavItem } from "@config/site-config";

interface MegaMenuProps {
  items: NavItem[];
  openNestedSubmenu: string | null;
  setOpenNestedSubmenu: (label: string | null) => void;
}

export function MegaMenu({ items, openNestedSubmenu, setOpenNestedSubmenu }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 right-0 top-full w-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden"
      style={{
        marginTop: "-1px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
          {items.map((child) => (
            <div key={child.label} className="space-y-3">
              {/* Ana Kategori Başlığı */}
              <a
                href={child.href}
                className="group inline-flex items-center gap-2 text-lg font-bold text-neutral-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
              >
                <span className="relative">
                  {child.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300" />
                </span>
              </a>

              {/* Alt Kategoriler */}
              {child.children && (
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {child.children.map((nestedChild) => (
                    <div key={nestedChild.label} className="group/item">
                      <div
                        className="relative"
                        onMouseEnter={() =>
                          nestedChild.children && setOpenNestedSubmenu(nestedChild.label)
                        }
                        onMouseLeave={() =>
                          !nestedChild.children && setOpenNestedSubmenu(null)
                        }
                      >
                        <a
                          href={nestedChild.href}
                          className="flex items-center justify-between py-2 px-3 rounded-md text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-all group-hover/item:translate-x-1"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary" />
                            {nestedChild.label}
                          </span>
                          {nestedChild.children && (
                            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-600 group-hover/item:text-primary transition-colors" />
                          )}
                        </a>

                        {/* 3. Seviye Menü (AI Eğitim Modülleri) */}
                        {nestedChild.children && openNestedSubmenu === nestedChild.label && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="ml-6 mt-1 pl-4 border-l-2 border-primary/30 space-y-0.5"
                          >
                            {nestedChild.children.map((deepChild) => (
                              <a
                                key={deepChild.label}
                                href={deepChild.href}
                                className="block py-1.5 px-3 rounded-md text-xs text-neutral-500 dark:text-neutral-500 hover:text-primary dark:hover:text-primary hover:bg-neutral-100 dark:hover:bg-neutral-800/30 transition-all"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="w-1 h-1 rounded-full bg-primary/50" />
                                  {deepChild.label}
                                </span>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Alt Bilgi */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-500">
              Tüm hizmetlerimizi keşfetmek için{" "}
              <a href="/hizmetler" className="text-primary hover:text-primary/80 transition-colors font-medium">
                Hizmetler sayfasını
              </a>{" "}
              ziyaret edebilirsiniz.
            </p>
            <a
              href="/iletisim"
              className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Detaylı Bilgi İçin İletişime Geçin
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

