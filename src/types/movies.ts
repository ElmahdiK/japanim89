interface GenreProps {
  id: number;
  name: string;
}

export default interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genres: GenreProps[];
}
