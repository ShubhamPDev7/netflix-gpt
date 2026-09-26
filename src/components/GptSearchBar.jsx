import React from "react";

const GptSearchBar = () => {
  return (
    <div className="flex justify-center pt-[35%] md:pt-[10%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid w-full max-w-2xl grid-cols-12 rounded-lg bg-black/80 p-2 shadow-2xl backdrop-blur-md md:p-4"
      >
        <input
          type="text"
          className="col-span-9 rounded-l-md bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-400 outline-none ring-1 ring-zinc-700/50 transition focus:ring-1 focus:ring-red-600 md:text-base"
          placeholder="What would you like to watch today?"
        />
        <button
          type="submit"
          className="col-span-3 rounded-r-md bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-[0.98] md:text-base"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
