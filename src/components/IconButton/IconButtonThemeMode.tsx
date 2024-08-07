'use client';

import { ThemeContext } from '@/app/theme-provider';
import { useContext } from 'react';
import Image from 'next/image';

export default function IconButtonThemeMode() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return (
    <Image
      src={`./${context.darkMode === 'light' ? 'light' : 'dark'}.svg`}
      alt='Vercel Logo'
      className='cursor-pointer dark:invert'
      width={24}
      height={24}
      priority
      onClick={context.toggleDarkMode}
    />
  );
}
