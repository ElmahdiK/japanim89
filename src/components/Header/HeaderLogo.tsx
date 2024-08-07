'use client';

interface HeaderLogoProps {
  color: string;
}

export default function HeaderLogo({ color }: HeaderLogoProps) {
  return (
    <p className='text-2xl font-semibold italic dark:text-white'>
      Japanim<span className={color}>89</span>
    </p>
  );
}
