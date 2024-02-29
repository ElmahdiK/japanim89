'use client';

import HeaderActions from './HeaderActions';
import HeaderLogo from './HeaderLogo';

interface HeaderProps {
  onSearchMovie?: () => void;
}
export default function Header({ onSearchMovie }: HeaderProps) {
  return (
    <header className='flex justify-between gap-6 bg-white p-4 shadow-xl dark:bg-slate-900'>
      <HeaderLogo />
      {onSearchMovie && <HeaderActions onSearch={onSearchMovie} />}
    </header>
  );
}
