'use client';

import MovieProps from '@/types/movies';
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: any;
  suggestMovies: MovieProps[];
}

export default function SearchBar({ onSearch, suggestMovies }: SearchBarProps) {
  const [query, setQuery] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      e.preventDefault();

      if (!e.target.value) setShowSuggestions(false);
      else {
        // @ts-ignore
        setQuery(e.target.value);
        // @ts-ignore
        if (e.target.value.length > 3) {
          onSearch(e.target.value);
          if (!showSuggestions) setShowSuggestions(true);
        }
      }
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    onSearch(target.textContent);
    if (showSuggestions) setShowSuggestions(false);
  };

  return (
    <div className='relative'>
      <input
        type='search'
        placeholder='Search...'
        value={query || ''}
        // @ts-ignore
        onChange={handleInputChange}
        className='rounded-md bg-slate-100 px-4 py-2 outline-none outline-offset-0 dark:bg-gray-700 dark:text-white'
        list='suggest-movies'
      />
      <ul
        id='suggest-movies'
        className={`absolute left-0 right-0 z-20 mt-1 list-none bg-slate-100  outline-offset-0 dark:bg-gray-800 dark:text-gray-400 ${!showSuggestions && 'hidden'}`}
      >
        {suggestMovies.map((movie) => (
          <li key={movie.id} className='border-b-slate-500'>
            {/* <button onClick={handleClick} onKeyDown={handleClick} type='button'> */}
            <button
              onClick={handleClick}
              type='button'
              className='w-full p-2 text-left hover:bg-slate-600 hover:text-white'
            >
              {movie.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
