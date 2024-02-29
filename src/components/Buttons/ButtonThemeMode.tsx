'use client';

import { ThemeContext } from '@/app/theme-provider';
import { useContext } from 'react';
import Image from 'next/image';

export default function ButtonThemeMode() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <label htmlFor='darkmode' className='cursor-pointer'>
      <input
        type='checkbox'
        onChange={toggleDarkMode}
        className=' hidden'
        id='darkmode'
      />
      <Image
        src={darkMode === 'light' ? 'light.svg' : 'dark.svg'}
        alt='Vercel Logo'
        className='dark:invert'
        width={24}
        height={24}
        priority
      />
    </label>
  );
}
