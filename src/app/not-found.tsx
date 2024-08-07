'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-screen place-content-center place-items-center content-center items-center justify-items-center bg-zinc-50 align-middle'>
      <p className='flex-1 text-center text-black'>
        <span className='block text-8xl font-bold'>404</span>
        <span className='block text-4xl font-medium'>Not Found</span>
        <br />
        <br />
        <Link
          href='./'
          className='rounded-md bg-slate-900 p-4 text-white hover:bg-slate-600'
        >
          Go back
        </Link>
      </p>
      <Image
        src={`./404.png`}
        alt='Not found'
        className='m-10 flex-1 p-10 shadow-xl'
        width={400}
        height={200}
        style={{ width: '100%', height: 'auto' }}
        priority
      />
    </div>
  );
}
