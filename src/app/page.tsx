'use client';

import { useContext, useEffect, useState } from 'react';
import Movies from '@/components/Movies';
import { MovieProps, MovieListProps } from '@/types/movies';
import { ThemeContext } from '@/app/theme-provider';
import Header from '@/components/Header';

async function discoverMovies(page: number): Promise<MovieProps[] | null> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=${page}&sort_by=popularity.desc&with_keywords=4344|6027`
    );

    const data: MovieListProps = await response.json();
    return data.results;
  } catch (error: unknown) {
    console.error(`error:${error}`);
  }

  return null;
}

async function getMovies(query: string): Promise<MovieProps[] | null> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`
    );

    const data: MovieListProps = await response.json();
    return data.results;
  } catch (error: unknown) {
    console.error(`error:${error}`);
  }

  return null;
}

export default function Page() {
  const { darkMode } = useContext(ThemeContext);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadDiscoverMovies = async () => {
      setIsLoading(true);
      const fetchDiscoverMovies = await discoverMovies(page);
      if (fetchDiscoverMovies) {
        setMovies([...movies, ...fetchDiscoverMovies]);
      }
      setIsLoading(false);
    };

    loadDiscoverMovies();
  }, [page]);

  // On scroll, call discover movies but with the next page

  useEffect(() => {
    const detectBottomOfPage = () => {
      const cardHeight = 200;
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
    const fetchedMovies = await getMovies(searchTerm);
    if (fetchedMovies) {
      setMovies(fetchedMovies);
    }
  };

  return (
    <div
      className={`${darkMode} 0 relative flex h-full h-screen flex-col bg-slate-50 dark:bg-slate-700`}
    >
      {/* @ts-ignore */}
      <Header onSearchMovie={handleSearch} />

      <Movies movies={movies} />
    </div>
  );
}
