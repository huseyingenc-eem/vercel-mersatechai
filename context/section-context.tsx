'use client';

import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

export type SectionBgColor = 'white' | 'slate' | 'gradient' | 'transparent';

interface SectionInfo {
  id: string;
  bgColor: SectionBgColor;
}

interface SectionContextType {
  sections: SectionInfo[];
  register: (section: SectionInfo) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [sections, setSections] = useState<SectionInfo[]>([]);

  const register = (section: SectionInfo) => {
    setSections(prev => {
      // Zaten varsa güncelle, yoksa ekle
      if (prev.some(s => s.id === section.id)) {
        return prev.map(s => s.id === section.id ? section : s);
      }
      return [...prev, section];
    });
  };

  const value = useMemo(() => ({ sections, register }), [sections]);

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

