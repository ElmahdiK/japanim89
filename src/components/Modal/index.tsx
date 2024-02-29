'use client';

import { ReactNode, useContext } from 'react';
import { ThemeContext } from '@/app/theme-provider';
import Image from 'next/image';

interface MovieModalProps {
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export default function Modal({ onClose, children, title }: MovieModalProps) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode}>
      <div
        className={`modal fixed bottom-0 left-0 right-0 top-0 z-10 m-auto h-1/2 w-1/2 bg-white shadow-lg dark:bg-slate-900`}
      >
        <div className='flex items-center bg-white p-2 shadow-lg dark:bg-slate-900 dark:text-white'>
          <span className='flex-1 p-2 text-xl font-bold'>{title}</span>
          <button type='button' onClick={onClose} className='p-2'>
            X
            <Image
              src='/light.svg'
              alt='Vercel Logo'
              className='dark:invert'
              width={24}
              height={24}
              priority
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
