// src/components/MovieCard.jsx
import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="w-24 sm:w-32 md:w-40 lg:w-48 shrink-0 cursor-pointer transition-transform duration-200 ease-out hover:scale-105 active:scale-100">
      <img
        className="aspect-[2/3] w-full rounded-md object-cover shadow-lg"
        alt={title || "Movie Poster"}
        src={IMG_CDN_URL + posterPath}
        loading="lazy"
      />
    </div>
  );
};

export default MovieCard;
