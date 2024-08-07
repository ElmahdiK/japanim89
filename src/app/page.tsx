'use client';

import { Suspense, useContext, useEffect, useState } from 'react';
import Movies from '@/components/Movies';
import { ThemeContext } from '@/app/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MovieProps from '@/types/movies';
import Loading from './loading';

interface MovieListProps {
  page: number;
  results: MovieProps[];
}

const getMovies = async (
  query: string | null,
  page: number
): Promise<MovieListProps | null> => {
  try {
    const BASE_URL_API = 'https://api.themoviedb.org/3';
    const section = query ? 'search' : 'discover';
    const queryMovie = `${BASE_URL_API}/${section}/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=${page}&sort_by=popularity.desc${query && `&query=${query}`}`;
    const response = await fetch(queryMovie);

    const data: MovieListProps = await response.json();
    return data;
  } catch (error: unknown) {
    console.error(`error:${error}`);
  }
  return null;
};

export default function Page() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerms, setSearchTerms] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadDiscoverMovies = async () => {
    setIsLoading(true);

    const response = await getMovies(searchTerms, page);
    const results = response?.results;
    // console.log('results ===>', results);
    if (results) setMovies([...movies, ...results]);

    setIsLoading(false);
  };

  useEffect(() => {
    loadDiscoverMovies();
  }, [page]);

  const handleSearch = async (searchTerm?: string | null) => {
    if (searchTerm) {
      setSearchTerms(searchTerm);
      setPage(1);

      const response = await getMovies(searchTerms, page);
      const results = response?.results;
      if (results) setMovies(results);
      return results;
    }
    return undefined;
  };

  const handleClick = () => setPage(page + 1);

  return (
    <div
      className={`${context.darkMode} 0 relative flex h-full h-screen flex-col bg-slate-50 dark:bg-gray-950`}
    >
      {/* @ts-ignore */}
      <Header
        onSearchMovie={handleSearch}
        suggestMovies={movies.slice(0, 5)}
        results={movies.length}
      />
      <button
        type='button'
        onClick={handleClick}
        className='bg-transparent p-4 font-semibold dark:text-gray-300'
      >
        {isLoading ? 'Loading...' : 'Click here to load more results!'}
      </button>
      <Suspense fallback={<Loading />}>
        <Movies movies={movies} />
      </Suspense>

      <Footer />
    </div>
  );
}
