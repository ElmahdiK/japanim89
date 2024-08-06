'use client';

import MovieCard from '@/components/MovieCard';
import MovieProps from '@/types/movies';

interface MoviesProps {
  movies: MovieProps[];
}

// récupérer les getAllMovies
export default function Movies({ movies }: MoviesProps) {
  return (
    <div className='grid grid-flow-row grid-cols-2 items-stretch justify-center gap-1 p-0 dark:bg-gray-950 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10'>
      {movies.map((movie, index) => (
        <MovieCard key={movie.id} movieInfo={movie} index={index} />
      ))}
    </div>
  );
}
