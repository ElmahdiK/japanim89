import { ReactNode } from 'react';
import Header from '@/components/Header';

export default function ContactLayout({
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
