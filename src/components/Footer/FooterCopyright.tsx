'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function FooterCopyright() {
  const pathname = usePathname();
  return (
    <Link href='./' className={`link p-2 ${pathname === '/' ? 'active' : ''}`}>
      © 2024 japanim89
    </Link>
  );
}
