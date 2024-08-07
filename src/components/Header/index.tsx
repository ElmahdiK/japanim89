'use client';

import MovieProps from '@/types/movies';
import HeaderLogo from './HeaderLogo';
import IconButtonThemeMode from '../IconButton/IconButtonThemeMode';
import SearchBar from '../SearchBar';

interface HeaderProps {
  onSearchMovie: () => Promise<MovieProps[] | undefined>;
  suggestMovies: MovieProps[];
  results: number;
}
export default function Header({
  onSearchMovie,
  suggestMovies,
  results = 0,
}: HeaderProps) {
  return (
    <header
      className={`flex flex-col items-center justify-between gap-6 bg-white p-4 align-middle shadow-xl dark:bg-gray-900 sm:flex-row`}
    >
      <HeaderLogo color='text-red-700' />

      <div className='flex items-center gap-6'>
        <SearchBar onSearch={onSearchMovie} suggestMovies={suggestMovies} />
      </div>

      <div className='flex content-center items-center justify-center justify-items-center gap-4'>
        <span className='text-sm text-gray-500 dark:text-white'>
          Found <b>{results}</b> results
        </span>

        <IconButtonThemeMode />
      </div>
    </header>
  );
}
