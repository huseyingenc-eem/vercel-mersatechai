"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, Package } from "lucide-react";
import type { NavItem } from "@config/site-config";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { Text } from "@/components/ui/typography/text";

interface MegaMenuProps {
  items: NavItem[];
  openNestedSubmenu: string | null;
  setOpenNestedSubmenu: (label: string | null) => void;
  isMobile?: boolean;
}

// Menü resimleri
const menuImages: Record<string, string[]> = {
  "Is Surecleri": [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format",
  ],
  "AI Otomasyon": [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format",
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format",
  ],
  "default": [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format",
  ]
};

export function MegaMenu({ items, openNestedSubmenu, setOpenNestedSubmenu, isMobile = false }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>(items[0]?.label || "");

  useEffect(() => {
    setOpenNestedSubmenu(null);
  }, [activeCategory, setOpenNestedSubmenu]);

  const activeItem = items.find((item) => item.label === activeCategory);
  const images = menuImages[activeCategory] || menuImages["default"];

  // MOBİL GÖRÜNÜM - TAM EKRAN
  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 z-50 bg-white dark:bg-neutral-900 overflow-y-auto"
        style={{ top: '64px' }}
      >
        <div className="p-4 space-y-4">
          {/* Kategoriler */}
          <div className="space-y-2">
            <Text variant="tiny" theme="muted" className="uppercase tracking-wider px-2">
              Kategoriler
            </Text>
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveCategory(item.label)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeCategory === item.label
                    ? "bg-primary/10 dark:bg-primary/20"
                    : "hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Text variant="small" theme={activeCategory === item.label ? "primary" : "default"} className="font-medium">
                    {item.label}
                  </Text>
                  <ChevronRight className={`w-4 h-4 ${activeCategory === item.label ? "text-primary" : "text-neutral-400"}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Alt Kategoriler */}
          <AnimatePresence mode="wait">
            {activeItem && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-800"
              >
                <a href={activeItem.href}>
                  <Text variant="h6" theme="default" className="px-2">
                    {activeItem.label}
                  </Text>
                </a>

                {activeItem.children && activeItem.children.length > 0 ? (
                  <div className="space-y-2">
                    {activeItem.children.map((child) => (
                      <div key={child.label}>
                        {child.children ? (
                          <>
                            <button
                              onClick={() => setOpenNestedSubmenu(openNestedSubmenu === child.label ? null : child.label)}
                              className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
                                openNestedSubmenu === child.label ? "bg-primary/5" : "hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <Text variant="small" theme={openNestedSubmenu === child.label ? "primary" : "default"}>
                                  {child.label}
                                </Text>
                                <div className="flex items-center gap-2">
                                  <Text variant="tiny" theme="muted" className="px-1.5 py-0.5 rounded bg-primary/10">
                                    {child.children.length}
                                  </Text>
                                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                                    openNestedSubmenu === child.label ? "rotate-90 text-primary" : "text-neutral-400"
                                  }`} />
                                </div>
                              </div>
                            </button>

                            <AnimatePresence>
                              {openNestedSubmenu === child.label && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.15 }}
                                  className="mt-1 pl-4 space-y-1"
                                >
                                  {child.children.map((deepChild) => (
                                    <a
                                      key={deepChild.label}
                                      href={deepChild.href}
                                      className="block py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-all"
                                    >
                                      <Text variant="small" theme="muted">
                                        {deepChild.label}
                                      </Text>
                                    </a>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <a href={child.href} className="block px-4 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/50">
                            <Text variant="small">{child.label}</Text>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center">
                    <Package className="w-12 h-12 mx-auto mb-3 text-primary/40" />
                    <Text variant="small" theme="muted">Bu kategori için alt menü bulunmuyor</Text>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  // Desktop görünümü
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="absolute left-0 right-0 top-full w-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-2xl"
      style={{
        marginTop: "-1px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        minHeight: "480px", // Sabit minimum yükseklik
        maxHeight: "480px"  // Sabit maksimum yükseklik
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* SOL: Kategoriler */}
          <div className="lg:col-span-3 space-y-1">
            <Text variant="tiny" theme="muted" className="uppercase tracking-wider mb-3 px-3">
              Kategoriler
            </Text>
            {items.map((item) => (
              <button
                key={item.label}
                onMouseEnter={() => setActiveCategory(item.label)}
                onClick={() => setActiveCategory(item.label)}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-all group ${
                  activeCategory === item.label ? "bg-primary/10 dark:bg-primary/20" : "hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Text variant="small" theme={activeCategory === item.label ? "primary" : "default"} className="font-medium">
                    {item.label}
                  </Text>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    activeCategory === item.label ? "translate-x-1 text-primary" : "text-neutral-400 group-hover:translate-x-1"
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* ORTA: Alt Başlıklar */}
          <div className="lg:col-span-5 border-l border-r border-neutral-200 dark:border-neutral-800 px-6">
            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* Ana Kategori Başlığı - Sol ile aynı hizada */}
                  <a href={activeItem.href} className="group inline-flex items-center gap-2">
                    <Text variant="tiny" theme="muted" className="uppercase tracking-wider group-hover:text-primary transition-colors">
                      {activeItem.label}
                    </Text>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                  </a>

                  {activeItem.children && activeItem.children.length > 0 ? (
                    <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {activeItem.children.map((child) => (
                        <div key={child.label}>
                          {child.children ? (
                            <button
                              onClick={() => setOpenNestedSubmenu(openNestedSubmenu === child.label ? null : child.label)}
                              onMouseEnter={() => setOpenNestedSubmenu(child.label)}
                              onMouseLeave={() => setOpenNestedSubmenu(null)}
                              className={`w-full text-left flex items-center justify-between py-2.5 px-3 rounded-md transition-all ${
                                openNestedSubmenu === child.label ? "bg-primary/10" : "hover:bg-primary/5"
                              }`}
                            >
                              <Text variant="small" theme={openNestedSubmenu === child.label ? "primary" : "default"} className="font-medium">
                                {child.label}
                              </Text>
                              <div className="flex items-center gap-1">
                                <Text variant="tiny" theme="primary" className="px-1.5 py-0.5 rounded bg-primary/10 font-medium">
                                  {child.children.length}
                                </Text>
                                <ChevronRight className={`w-3.5 h-3.5 ${openNestedSubmenu === child.label ? "text-primary" : "text-neutral-400"}`} />
                              </div>
                            </button>
                          ) : (
                            <a href={child.href} className="block py-2.5 px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-all">
                              <Text variant="small">{child.label}</Text>
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <Package className="w-8 h-8 text-primary/60" />
                      </div>
                      <Text variant="small" theme="muted" className="font-medium">
                        Bu kategori için alt menü bulunmuyor
                      </Text>
                      <a href={activeItem.href} className="inline-flex items-center gap-2 mt-3">
                        <Text variant="tiny" theme="primary">Kategoriye git</Text>
                        <ArrowRight className="w-3 h-3 text-primary" />
                      </a>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SAĞ: Carousel veya Alt Kategorinin Alt Kategorileri */}
          <div className="lg:col-span-4 hidden lg:block">
            <AnimatePresence mode="wait">
              {openNestedSubmenu ? (
                // Alt kategorinin alt kategorisi açıksa - Listeyi göster
                <motion.div
                  key="subcategories"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <Text variant="tiny" theme="muted" className="uppercase tracking-wider px-3">
                    {openNestedSubmenu}
                  </Text>

                  <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {activeItem?.children
                      ?.find(c => c.label === openNestedSubmenu)
                      ?.children?.map((deepChild) => (
                        <a
                          key={deepChild.label}
                          href={deepChild.href}
                          className="block py-2.5 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-all group"
                        >
                          <Text variant="small" theme="default" className="group-hover:text-primary transition-colors">
                            {deepChild.label}
                          </Text>
                        </a>
                      ))}
                  </div>
                </motion.div>
              ) : (
                // Alt kategori kapalıysa - Carousel göster
                <motion.div
                  key="carousel"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border-2 border-neutral-200/50 dark:border-neutral-700/50"
                >
                  <Carousel autoplay autoplayDelay={4000} className="w-full h-full">
                    <CarouselContent className="h-full">
                      {images.map((image, index) => (
                        <CarouselItem key={index} className="h-full">
                          <div className="relative w-full h-full">
                            <Image src={image} alt={`${activeCategory} ${index + 1}`} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                <Text variant="h5" className="text-white font-bold drop-shadow-lg mb-2">
                                  {activeCategory}
                                </Text>
                                <Text variant="small" className="text-white/90 drop-shadow-md">
                                  {activeItem?.children?.length || 0} hizmet kategorisi
                                </Text>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Tablet Carousel */}
        <div className="lg:hidden mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <div className="w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-lg border-2 border-neutral-200/50 dark:border-neutral-700/50">
            <Carousel autoplay autoplayDelay={4000} className="w-full h-full">
              <CarouselContent className="h-full">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="relative w-full h-full">
                      <Image src={image} alt={`${activeCategory} ${index + 1}`} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                          <Text variant="h6" className="text-white font-bold drop-shadow-lg mb-1">
                            {activeCategory}
                          </Text>
                          <Text variant="tiny" className="text-white/90 drop-shadow-md">
                            {activeItem?.children?.length || 0} hizmet
                          </Text>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.2); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, 0.3); }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.3); }
      `}</style>
    </motion.div>
  );
}

