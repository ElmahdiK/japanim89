'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function FooterLinks() {
  const pathname = usePathname();
  return (
    <div className='flex'>
      <Link
        href='./about'
        className={`link p-2 ${pathname === '/about' ? 'active' : ''}`}
      >
        About
      </Link>
      <Link
        href='./contact'
        className={`link p-2 ${pathname === '/contact' ? 'active' : ''}`}
      >
        Contact
      </Link>
    </div>
  );
}
