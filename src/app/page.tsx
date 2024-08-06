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
  results: MovieProps[] | null;
}

async function getMovies(
  query: string,
  page: number
): Promise<MovieListProps | null> {
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
}

export default function Page() {
  const cardHeight = 150;
  const { darkMode } = useContext(ThemeContext);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerms, setSearchTerms] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadDiscoverMovies = async () => {
      setIsLoading(true);
      const { results } = await getMovies(searchTerms || '', page);
      if (results) setMovies([...movies, ...results]);
      setIsLoading(false);
    };

    loadDiscoverMovies();
  }, [page]);

  // On scroll, call discover movies but with the next page
  useEffect(() => {
    const detectBottomOfPage = () => {
      // console.log(
      //   window.innerHeight,
      //   window.scrollY,
      //   window.innerHeight + window.scrollY,
      //   document.body.scrollHeight,
      //   isLoading
      // );
      if (
        !isLoading &&
        window.innerHeight + window.scrollY + cardHeight >
          document.body.scrollHeight
      ) {
        // console.log('more data', page, isLoading);
        setPage(page + 1);
      }
    };

    window.addEventListener('scroll', detectBottomOfPage);
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', detectBottomOfPage);
    };
  }, [isLoading, page]);

  const handleSearch = async (searchTerm: string) => {
    setPage(1);
    setSearchTerms(searchTerm);
    const { results } = await getMovies(searchTerms || '', page);
    if (results) {
      setMovies(results);
    }
  };

  return (
    <div
      className={`${darkMode} 0 relative flex h-full h-screen flex-col bg-slate-50 dark:bg-gray-950`}
    >
      {/* @ts-ignore */}
      <Header
        onSearchMovie={handleSearch}
        suggestMovies={movies.slice(0, 5)}
        results={movies.length}
      />

      <Suspense fallback={<Loading />}>
        <Movies movies={movies} />
      </Suspense>

      <Footer />
    </div>
  );
}
