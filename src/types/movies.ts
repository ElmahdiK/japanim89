interface GenreProps {
  id: number;
  name: string;
}

export type MovieProps = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genres: GenreProps[];
};

export type MovieListProps = {
  page: number;
  results: MovieProps[];
  total_pages: number;
  total_results: number;
};

export type MovieDetailProps = {
  movie: MovieProps;
  similarMovies: MovieListProps;
  recommendedMovies: MovieListProps;
};
