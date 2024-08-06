'use client';

import SearchBar from '../SearchBar';

interface HeaderActionProps {
  onSearch: () => void;
  suggestMovies: string[];
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
