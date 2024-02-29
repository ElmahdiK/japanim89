'use client';

import Loading from '@/app/loading';
import MovieCard from '@/components/MovieCard';
import { Suspense } from 'react';

interface MoviesProps {
  movies: any[];
}

// récupérer les getAllMovies
export default function Movies({ movies }: MoviesProps) {
  return (
    <div className='grid grid-flow-row grid-cols-6 items-stretch justify-center gap-20 p-10 dark:bg-slate-600'>
      <Suspense fallback={<Loading />}>
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movieInfo={movie} index={index} />
        ))}
      </Suspense>
    </div>
  );
}
