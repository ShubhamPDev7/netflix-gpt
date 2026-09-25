import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-zinc-950 text-white select-none">
      <Header />
      <main className="relative">
        <MainContainer />
        <SecondaryContainer />
      </main>
    </div>
  );
};

export default Browse;
