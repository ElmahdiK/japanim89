'use client';

import Image from 'next/image';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Modal';
import Trailer from '../Trailer';

interface MovieCardProps {
  movieInfo: any;
  index: number;
}

async function getMovie(id: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=fr-FR`
  );

  if (!response.ok) throw new Error('failed to fetch movie');
  return response.json();
}

export default function MovieCard({ movieInfo, index }: MovieCardProps) {
  const [showModal, setShowModal] = useState(false);
  const imgMovie = movieInfo.poster_path
    ? `https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`
    : `/not-found.jpeg`;

  const { title, id } = movieInfo;
  const [leTrailer, setLeTrailer] = useState('rien');

  const handleClick = async () => {
    const fetchedMovie = await getMovie(id);
    setLeTrailer(fetchedMovie.results[0]?.key ?? 'dQw4w9WgXcQ');
    setShowModal(true);
  };

  return (
    <>
      <Image
        width={400}
        height={200}
        src={imgMovie}
        alt={`image ${index}`}
        onClick={handleClick}
        className='cursor-pointer bg-white object-cover p-3 shadow-lg dark:bg-slate-800'
      />

      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} title={title}>
            <Trailer trailer={leTrailer} />
          </Modal>,
          document.body
        )}
    </>
  );
}
