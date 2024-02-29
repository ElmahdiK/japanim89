'use client';

import SearchBar from '../SearchBar';
import ButtonThemeMode from '../Buttons/ButtonThemeMode';

interface HeaderActionProps {
  onSearch: () => void;
}
export default function HeaderActions({ onSearch }: HeaderActionProps) {
  return (
    <div className='flex gap-6 '>
      <SearchBar onSearch={onSearch} />
      <ButtonThemeMode />
    </div>
  );
}
