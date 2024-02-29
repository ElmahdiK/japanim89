'use client';

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState('light');

  function toggleDarkMode() {
    setDarkMode(darkMode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
