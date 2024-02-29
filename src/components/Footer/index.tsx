'use client';

import FooterLinks from './FooterLinks';
import FooterCopyright from './FooterCopyright';

export default function Footer() {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-10 flex justify-between rounded-none bg-white p-4 text-sm text-neutral-400 shadow-md dark:bg-slate-800'>
      <FooterCopyright />
      <FooterLinks />
    </div>
  );
}
