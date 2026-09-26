import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo?.key) {
    return <div className="aspect-video w-full bg-black" />;
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        className="pointer-events-none h-full w-full scale-125 sm:scale-135 md:scale-150 object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerVideo?.key}&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
};

export default VideoBackground;
