import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import groq from "../utils/groq";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movie.trim(),
        )}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS,
      );
      const json = await data.json();
      return json.results || [];
    } catch (error) {
      console.error("TMDB fetch error:", error);
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current?.value;
    if (!query) return;

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      query +
      ". Only give me names of 5 movies, comma-separated like the example result given ahead. Example Results: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "openai/gpt-oss-120b",
    });

    const gptResults = chatCompletion.choices?.[0]?.message?.content;
    if (!gptResults) return;

    const movieNames = gptResults
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean);

    const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({
        movieNames: movieNames,
        movieResults: tmdbResults,
      }),
    );
  };

  return (
    <div className="flex justify-center px-4 pt-28 sm:pt-36 md:pt-40">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearchClick();
        }}
        className="flex w-full max-w-2xl flex-col sm:grid sm:grid-cols-12 rounded-lg bg-black/80 p-2.5 shadow-2xl backdrop-blur-md sm:p-3 gap-2 sm:gap-0"
      >
        <input
          ref={searchText}
          type="text"
          className="w-full sm:col-span-9 rounded-md sm:rounded-r-none bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder-zinc-400 outline-none ring-1 ring-zinc-700/50 transition focus:ring-1 focus:ring-red-600 sm:text-base"
          placeholder="What would you like to watch today?"
        />
        <button
          type="submit"
          className="w-full sm:col-span-3 rounded-md sm:rounded-l-none bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-[0.98] sm:text-base cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
