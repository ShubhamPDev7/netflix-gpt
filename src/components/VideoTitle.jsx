import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 flex aspect-video w-full flex-col justify-center bg-gradient-to-r from-black/85 via-black/40 to-transparent px-4 sm:px-8 md:px-14 lg:px-20 text-white">
      <h1 className="text-xl font-extrabold tracking-tight drop-shadow-md sm:text-3xl md:text-5xl lg:text-6xl line-clamp-1 max-w-[80%]">
        {title}
      </h1>

      <p className="hidden sm:line-clamp-2 md:line-clamp-3 py-2 sm:py-3 text-xs font-normal text-zinc-300 drop-shadow md:text-sm lg:text-base sm:w-3/4 md:w-1/2 lg:w-1/3">
        {overview}
      </p>

      <div className="flex items-center gap-2 pt-2 sm:gap-3 sm:pt-3">
        <button className="flex items-center gap-1.5 rounded bg-white px-3 py-1.5 text-xs font-bold text-black transition hover:bg-white/80 active:scale-95 sm:px-6 sm:py-2.5 sm:text-sm md:text-base cursor-pointer">
          <svg
            className="h-4 w-4 fill-current sm:h-5 sm:w-5"
            viewBox="0 0 24 24"
          >
            <path d="M6 4l15 8-15 8z" />
          </svg>
          <span>Play</span>
        </button>

        <button className="flex items-center gap-1.5 rounded bg-zinc-500/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-zinc-500/50 active:scale-95 sm:px-6 sm:py-2.5 sm:text-sm md:text-base cursor-pointer">
          <svg
            className="h-4 w-4 fill-none stroke-current stroke-2 sm:h-5 sm:w-5"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
