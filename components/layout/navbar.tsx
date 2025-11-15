"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@components/ui/button";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site-config";
import { MegaMenu } from "../ui/mega-menu";
import { Logo } from "./logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('nav')) {
        setOpenSubmenu(null);
        setOpenNestedSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll tracking for dynamic navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Scroll durumu - 10px'den fazla scroll edildiyse true
      setIsScrolled(window.scrollY > 10);

      const sections = [
        { id: 'hero', element: document.querySelector('[data-section="hero"]') },
        { id: 'services', element: document.querySelector('[data-section="services"]') },
        { id: 'usecases', element: document.querySelector('[data-section="usecases"]') },
        { id: 'features', element: document.querySelector('[data-section="features"]') },
        { id: 'integrations', element: document.querySelector('[data-section="integrations"]') },
        { id: 'cta', element: document.querySelector('[data-section="cta"]') },
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          const offsetBottom = offsetTop + rect.height;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavbarBackground = () => {
    // Mega menü açıksa, mega menü ile aynı arka plan
    if (openSubmenu) {
      return 'bg-white dark:bg-neutral-900';
    }

    // Scroll edilmediyse tamamen saydam
    if (!isScrolled) {
      return 'bg-transparent';
    }

    // Scroll edildiyse section'a göre arka plan
    switch (activeSection) {
      case 'hero':
        return 'bg-background/80 dark:bg-black/80';
      case 'services':
        return 'bg-background/80 dark:bg-neutral-950/80';
      case 'usecases':
        return 'bg-secondary/80 dark:bg-black/80';
      case 'features':
        return 'bg-background/80 dark:bg-neutral-950/80';
      case 'integrations':
        return 'bg-secondary/80 dark:bg-black/80';
      case 'cta':
        return 'bg-background/80 dark:bg-neutral-900/80';
      default:
        return 'bg-white/80 dark:bg-black/80';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${getNavbarBackground()} ${isScrolled || openSubmenu ? 'backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50' : 'border-b border-transparent'} transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {siteConfig.nav.main.map((item, index) => (
              <div key={item.label} className="relative flex items-center">
                {item.children ? (
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                    className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === item.label ? "rotate-180" : ""}`} />
                  </motion.button>
                ) : (
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </motion.a>
                )}
              </div>
            ))}

            {mounted && (
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-yellow-500" />
                ) : (
                  <Moon className="w-4 h-4 text-neutral-700" />
                )}
              </motion.button>
            )}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Demo İsteyin
              </Button>
            </motion.div>
          </div>

          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-yellow-500" />
                ) : (
                  <Moon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                )}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openSubmenu && (
          <div className="hidden md:block">
            {siteConfig.nav.main.map((item) => {
              if (item.label === openSubmenu && item.children) {
                return (
                  <MegaMenu
                    key={item.label}
                    items={item.children}
                    openNestedSubmenu={openNestedSubmenu}
                    setOpenNestedSubmenu={setOpenNestedSubmenu}
                  />
                );
              }
              return null;
            })}
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${getNavbarBackground()} backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-500`}
          >
            <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {siteConfig.nav.main.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors py-2 text-left font-medium"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === item.label ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {openSubmenu === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2"
                          >
                            {item.children.map((child) => (
                              <div key={child.label} className="pl-4 border-l-2 border-neutral-300 dark:border-neutral-700">
                                {child.children ? (
                                  <div className="space-y-1">
                                    <button
                                      onClick={() => setOpenNestedSubmenu(openNestedSubmenu === child.label ? null : child.label)}
                                      className="w-full flex items-center justify-between text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors py-1.5 text-left text-sm font-medium"
                                    >
                                      <span>{child.label}</span>
                                      <ChevronDown className={`w-3 h-3 transition-transform ${openNestedSubmenu === child.label ? "rotate-180" : ""}`} />
                                    </button>
                                    <AnimatePresence>
                                      {openNestedSubmenu === child.label && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          className="pl-4 space-y-1 border-l-2 border-neutral-200 dark:border-neutral-600"
                                        >
                                          {child.children.map((nestedChild) => (
                                            <div key={nestedChild.label}>
                                              <a
                                                href={nestedChild.href}
                                                className="block text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors py-1"
                                                onClick={() => {
                                                  setIsOpen(false);
                                                  setOpenSubmenu(null);
                                                  setOpenNestedSubmenu(null);
                                                }}
                                              >
                                                {nestedChild.label}
                                              </a>
                                              {nestedChild.children && (
                                                <div className="pl-4 space-y-0.5 border-l border-neutral-200 dark:border-neutral-700 mt-1">
                                                  {nestedChild.children.map((deepChild) => (
                                                    <a
                                                      key={deepChild.label}
                                                      href={deepChild.href}
                                                      className="block text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors py-0.5"
                                                      onClick={() => {
                                                        setIsOpen(false);
                                                        setOpenSubmenu(null);
                                                        setOpenNestedSubmenu(null);
                                                      }}
                                                    >
                                                      {deepChild.label}
                                                    </a>
                                                  ))}
                                                </div>
                                              )}
                                            </div>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ) : (
                                  <a
                                    href={child.href}
                                    className="block text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors py-1.5"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setOpenSubmenu(null);
                                    }}
                                  >
                                    {child.label}
                                  </a>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors py-2 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <Button size="sm" className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Demo İsteyin
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

