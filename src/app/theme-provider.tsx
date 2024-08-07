'use client';

import React, { createContext, useState, useMemo } from 'react';

type ThemeContextType = {
  darkMode: string;
  toggleDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState('dark');

  function toggleDarkMode() {
    console.log('toggleDarkMode', darkMode);
    setDarkMode(darkMode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider
      value={useMemo(() => ({ darkMode, toggleDarkMode }), [darkMode])}
    >
      {children}
    </ThemeContext.Provider>
  );
}
