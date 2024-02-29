'use client';

import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: () => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState(``);

  const handleInputChange = (
    e: React.MouseEvent<HTMLInputElement> | undefined
  ) => {
    if (e) {
      e.preventDefault();

      // @ts-ignore
      setQuery(e.target.value);
      // @ts-ignore
      if (e.target.value.length > 3) onSearch(e.target.value);
    }
  };

  return (
    <input
      type='search'
      placeholder='Search...'
      value={query}
      // @ts-ignore
      onChange={handleInputChange}
      className={`rounded-md bg-slate-100 px-4 py-2 outline-offset-0 dark:bg-slate-700 dark:text-white`}
    />
  );
}
