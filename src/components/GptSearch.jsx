import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image Container */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <img
          src={NETFLIX_BG_IMG}
          alt="bg-img"
          className="h-full w-full object-cover brightness-50"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
