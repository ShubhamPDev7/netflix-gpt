import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) return null;

  return (
    <div className="bg-zinc-950">
      {/* Dynamic responsive negative margin pulls the list cleanly over the trailer bottom */}
      <div className="relative z-20 -mt-10 sm:-mt-24 md:-mt-40 lg:-mt-52 pl-3 sm:pl-6 md:pl-12 pb-10 space-y-4">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
