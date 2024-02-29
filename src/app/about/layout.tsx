import { ReactNode } from 'react';
import Header from '@/components/Header';

export default function AboutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
