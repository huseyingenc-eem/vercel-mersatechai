"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, MegaMenu, Text } from "@/components/ui";
import { Menu, X, ChevronDown, Moon, Sun, Phone, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSectionRegistry } from "@/context/section-context";
import { siteConfig } from "@/config/site-config";
import { Logo } from "./logo";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const { currentSectionBgColor } = useSectionRegistry();
  const { y } = useScrollPosition();
  const isScrolled = y > 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile) return;
      const target = event.target as HTMLElement;
      if (target.closest("nav") || target.closest("[data-mobile-menu]")) {
        return;
      }
      setOpenSubmenu(null);
      setOpenNestedSubmenu(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  const getNavbarBackground = () => {
    // Menü açıkken tam opak
    if (openSubmenu || isOpen) {
      return "bg-white dark:bg-neutral-900";
    }

    // Scroll edildiğinde - arka plan gözükmeyecek şekilde opak ama hafif transparan
    if (isScrolled) {
      let bgColor = "bg-background/95 dark:bg-neutral-900/95";
      if (currentSectionBgColor === "white") {
        bgColor = "bg-white/95 dark:bg-neutral-900/95";
      } else if (currentSectionBgColor === "slate") {
        bgColor = "bg-slate-50/95 dark:bg-neutral-900/95";
      } else if (currentSectionBgColor === "gradient") {
        bgColor = "bg-gradient-to-r from-background/95 to-slate-50/95 dark:from-neutral-900/95 dark:to-neutral-800/95";
      }
      return `${bgColor} backdrop-blur-lg`;
    }

    // Scroll 0 pozisyonunda - tamamen saydam
    return "bg-transparent";
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
    setOpenNestedSubmenu(null);
  };
  
  const handleLinkClick = () => {
    setTimeout(() => {
      closeMobileMenu();
    }, 150);
  };

  const selectedCategory = siteConfig.nav.main.find(item => item.label === openSubmenu);
  const selectedSubCategory = selectedCategory?.children?.find(child => child.label === openNestedSubmenu);

  const renderMobileMenu = () => {
    if (!isOpen || !isMobile) return null;

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
          <div className="flex-1 overflow-y-auto pb-32 py-6">
            <div className="space-y-2 px-4">
              {siteConfig.nav.main.map((item) => (
                item.children ? (
                  <button
                    key={item.label}
                    onClick={() => setOpenSubmenu(item.label)}
                    className="w-full flex items-center justify-between py-4 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all text-left"
                  >
                    <Text variant="small" theme="default" className="font-medium">{item.label}</Text>
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="w-full flex items-center justify-between py-4 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all text-left"
                  >
                    <Text variant="small" theme="default" className="font-medium">{item.label}</Text>
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-slate-50 dark:bg-neutral-800 p-6 border-t border-slate-200 dark:border-neutral-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center"><Phone className="w-6 h-6 text-white" /></div>
              <div>
                <Text variant="small" theme="default" className="font-bold">Hemen İletişime Geçin</Text>
                <Text variant="tiny" theme="muted">Size özel çözümler sunalım</Text>
              </div>
            </div>
            <Link href="/iletisim" onClick={handleLinkClick}>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">Demo İsteyin</Button>
            </Link>
          </div>
        </motion.div>
      );
    }

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
          <div className="flex-1 overflow-y-auto pb-32 py-6">
            <div className="space-y-2 px-4">
              <Link
                href={selectedCategory.href || '#'}
                onClick={handleLinkClick}
                className="w-full flex items-center justify-between py-4 rounded-lg bg-primary/5 hover:bg-primary/10 dark:bg-primary/10 dark:hover:bg-primary/20 transition-all text-left mb-2"
              >
                <Text variant="small" theme="primary" className="font-bold">{openSubmenu}</Text>
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              {selectedCategory.children.map((child) => (
                child.children && child.children.length > 0 ? (
                  <button
                    key={child.label}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpenNestedSubmenu(child.label); }}
                    className="w-full flex items-center justify-between py-4 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all text-left"
                  >
                    <Text variant="small" theme="default" className="font-medium flex-1">{child.label}</Text>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 text-primary text-xs font-semibold">{child.children.length}</span>
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                  </button>
                ) : (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={handleLinkClick}
                    className="w-full flex items-center justify-between py-4 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all text-left"
                  >
                    <Text variant="small" theme="default" className="font-medium">{child.label}</Text>
                  </Link>
                )
              ))}
            </div>
          </div>
        </motion.div>
      );
    }

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
          <div className="flex-1 overflow-y-auto pb-32 py-6">
            <div className="space-y-2 px-4">
              <Link
                href={selectedSubCategory.href || '#'}
                onClick={handleLinkClick}
                className="w-full flex items-center justify-between py-4 rounded-lg bg-primary/5 hover:bg-primary/10 dark:bg-primary/10 dark:hover:bg-primary/20 transition-all text-left mb-2"
              >
                <Text variant="small" theme="primary" className="font-bold">{openNestedSubmenu}</Text>
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              {selectedSubCategory.children.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block py-4 rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all"
                >
                  <Text variant="small" className="font-medium">{item.label}</Text>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${getNavbarBackground()} ${
          isScrolled || openSubmenu || (isOpen && isMobile)
            ? "border-b border-neutral-200/50 dark:border-neutral-800/50"
            : "border-b border-transparent"
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Logo
                showBackButton={isMobile && isOpen && (!!openSubmenu)}
                onBackClick={() => {
                  if (openNestedSubmenu) setOpenNestedSubmenu(null);
                  else if (openSubmenu) setOpenSubmenu(null);
                }}
              />
            </div>

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
                        <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === item.label ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <a href={item.href} className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm font-medium">
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-3">
              {/* {mounted && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-neutral-700" />}
                </motion.button>
              )} */}
              <div className="hidden sm:block">
                <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground" size="sm">Demo İsteyin</Button>
              </div>
              {isMobile && (
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-neutral-700 dark:text-neutral-300 relative z-50" aria-label="Menu">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              )}
            </div>
          </div>
        </div>

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
                      parentCategory={item}
                    />
                  );
                }
                return null;
              })}
            </div>
          )}
        </AnimatePresence>
      </nav>
      
      <AnimatePresence>
        {renderMobileMenu()}
      </AnimatePresence>
    </>
  );
}