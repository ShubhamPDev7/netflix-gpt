import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="w-28 sm:w-36 md:w-44 lg:w-48 shrink-0 cursor-pointer transition-transform duration-200 ease-out hover:scale-105 active:scale-100">
      <img
        className="w-full aspect-[2/3] rounded-md object-cover drop-shadow-md"
        alt={title || "Movie Poster"}
        src={IMG_CDN_URL + posterPath}
        loading="lazy"
      />
    </div>
  );
};

export default MovieCard;
