import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames || !movieResults) return null;

  return (
    <div className="mx-3 my-6 sm:mx-6 md:mx-10 rounded-lg bg-black/85 p-3 sm:p-6 text-white backdrop-blur-md shadow-2xl">
      <div className="space-y-4">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
