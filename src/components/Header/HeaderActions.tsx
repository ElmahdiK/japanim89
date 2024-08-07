'use client';

import MovieProps from '@/types/movies';
import SearchBar from '../SearchBar';

interface HeaderActionProps {
  onSearch: () => void;
  suggestMovies: MovieProps[];
}
export default function HeaderActions({
  onSearch,
  suggestMovies,
}: HeaderActionProps) {
  return (
    <div className='flex items-center gap-6'>
      <SearchBar onSearch={onSearch} suggestMovies={suggestMovies} />
    </div>
  );
}
