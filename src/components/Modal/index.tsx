'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

interface MovieModalProps {
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export default function Modal({ onClose, children, title }: MovieModalProps) {
  return (
    <div className='modal fixed bottom-0 left-0 right-0 top-0 z-20 m-auto h-1/2 w-11/12 bg-white shadow-lg dark:bg-gray-950 sm:w-1/2'>
      <div className='flex items-center p-2 shadow-lg dark:text-gray-950'>
        <span className='flex-1 p-2 text-xl font-bold'>{title}</span>
        <button type='button' onClick={onClose} className='p-2'>
          <Image
            src='./close.svg'
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
  );
}
