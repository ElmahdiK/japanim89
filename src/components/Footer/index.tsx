'use client';

import FooterCopyright from './FooterCopyright';

export default function Footer() {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-10 flex items-center justify-center rounded-none bg-white text-sm shadow-inner dark:bg-gray-950'>
      <FooterCopyright />
    </div>
  );
}
