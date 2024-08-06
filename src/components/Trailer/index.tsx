'use client';

interface TrailerProps {
  trailerUrl: string;
}

export const defaultYoutubeURL = 'https://www.youtube.com/embed';

export default function Trailer({ trailerUrl }: TrailerProps) {
  return (
    <iframe
      className='h-96 w-full'
      src={`${defaultYoutubeURL}/${trailerUrl}`}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    />
  );
}
