'use client';

import { ThemeContext } from '@/app/theme-provider';
import { useContext } from 'react';
import Image from 'next/image';

export default function IconButtonThemeMode() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Image
      src={darkMode === 'light' ? 'light.svg' : 'dark.svg'}
      alt='Vercel Logo'
      className='cursor-pointer dark:invert'
      width={24}
      height={24}
      priority
      onClick={toggleDarkMode}
    />
  );
}
