import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const { id, original_title, overview } = mainMovie;

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
