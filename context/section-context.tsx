'use client';

import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';

export type SectionBgColor = 'white' | 'slate' | 'gradient' | 'transparent';

interface SectionInfo {
  id: string;
  bgColor: SectionBgColor;
}

interface SectionContextType {
  sections: SectionInfo[];
  register: (section: SectionInfo) => void;
  currentSectionBgColor: SectionBgColor | null;
  setCurrentSectionBgColor: (color: SectionBgColor | null) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [sections, setSections] = useState<SectionInfo[]>([]);
  const [currentSectionBgColor, setCurrentSectionBgColor] = useState<SectionBgColor | null>(null);

  // SORUN ÇÖZÜMÜ: useCallback kullanıldı.
  const register = useCallback((section: SectionInfo) => {
    setSections(prev => {
      const existingIndex = prev.findIndex(s => s.id === section.id);

      if (existingIndex > -1) {
        // Eğer kayıt zaten varsa ve bgColor aynıysa state güncelleme (re-render'ı engelle)
        if (prev[existingIndex].bgColor === section.bgColor) {
          return prev;
        }

        // Sadece değişiklik varsa güncelle
        const newSections = [...prev];
        newSections[existingIndex] = section;
        return newSections;
      }

      // Yeni kayıt ekle
      return [...prev, section];
    });
  }, []); // Dependency array boş, çünkü setSections zaten stabildir.

  const value = useMemo(() => ({
    sections,
    register,
    currentSectionBgColor,
    setCurrentSectionBgColor
  }), [sections, register, currentSectionBgColor]);

  return (
      <SectionContext.Provider value={value}>
        {children}
      </SectionContext.Provider>
  );
};

export const useSectionRegistry = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSectionRegistry must be used within a SectionProvider');
  }
  return context;
};