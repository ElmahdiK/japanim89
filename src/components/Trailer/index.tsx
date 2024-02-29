'use client';

interface TrailerProps {
  trailer: string;
}

export default function Trailer({ trailer }: TrailerProps) {
  return (
    <iframe
      className='h-96 w-full'
      src={`https://www.youtube.com/embed/${trailer}`}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    />
  );
}
