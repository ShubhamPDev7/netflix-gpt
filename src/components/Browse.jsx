import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-zinc-950 text-white select-none">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <main className="relative w-full">
          <MainContainer />
          <SecondaryContainer />
        </main>
      )}
    </div>
  );
};

export default Browse;
