"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps as NextThemesProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: NextThemesProviderProps) {
  // Force light theme application so dark mode is disabled globally.
  // This ignores any previously stored 'theme' in localStorage.
  return (
    <NextThemesProvider {...props} forcedTheme="light">
      {children}
    </NextThemesProvider>
  );
}

