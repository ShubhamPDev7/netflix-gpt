import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute ">
        <img
          src={NETFLIX_BG_IMG}
          alt="bg-img"
          className="h-full w-full object-cover brightness-50"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
