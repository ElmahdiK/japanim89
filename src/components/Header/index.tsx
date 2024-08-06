'use client';

import HeaderActions from './HeaderActions';
import HeaderLogo from './HeaderLogo';
import IconButtonThemeMode from '../IconButton/IconButtonThemeMode';

interface HeaderProps {
  onSearchMovie?: () => void;
  suggestMovies: string[];
  results: number;
}
export default function Header({
  onSearchMovie,
  suggestMovies,
  results,
}: HeaderProps) {
  return (
    <header className='flex flex-col items-center justify-between gap-6 bg-white p-4 align-middle shadow-xl dark:bg-gray-900 sm:flex-row'>
      <HeaderLogo />
      {onSearchMovie && (
        <HeaderActions onSearch={onSearchMovie} suggestMovies={suggestMovies} />
      )}
      <div className='flex content-center items-center justify-center justify-items-center gap-4'>
        <span className='text-sm text-gray-500 dark:text-white'>
          Found <b>{results || 0}</b> results
        </span>
        <IconButtonThemeMode />
      </div>
    </header>
  );
}
