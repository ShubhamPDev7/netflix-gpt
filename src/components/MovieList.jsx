import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="py-3 md:py-4">
      <h2 className="py-2 text-base font-semibold text-white sm:text-lg md:text-2xl">
        {title}
      </h2>
      <div className="flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-3 md:gap-4 py-2">
          {movies.map((movie) => (
            <MovieCard
              key={movie?.id}
              posterPath={movie?.poster_path}
              title={movie?.title || movie?.original_title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
