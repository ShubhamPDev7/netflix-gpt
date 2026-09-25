import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 flex w-screen aspect-video flex-col justify-center bg-linear-to-r from-black/80 via-black/40 to-transparent px-8 text-white md:px-16 lg:px-24">
      <h1 className="text-2xl font-extrabold tracking-tight drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="line-clamp-3 py-4 text-xs font-normal text-zinc-300 drop-shadow sm:text-sm md:w-1/2 md:text-base lg:w-1/3">
        {overview}
      </p>

      <div className="flex items-center gap-3 pt-2">
        <button className="flex items-center gap-2 rounded bg-white px-5 py-2 text-sm font-bold text-black transition hover:bg-white/80 active:scale-95 md:px-7 md:py-2.5 md:text-base">
          <svg
            className="h-5 w-5 fill-current md:h-6 md:w-6"
            viewBox="0 0 24 24"
          >
            <path d="M6 4l15 8-15 8z" />
          </svg>
          <span>Play</span>
        </button>

        <button className="flex items-center gap-2 rounded bg-zinc-500/70 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-zinc-500/50 active:scale-95 md:px-7 md:py-2.5 md:text-base">
          <svg
            className="h-5 w-5 fill-none stroke-current stroke-2 md:h-6 md:w-6"
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
