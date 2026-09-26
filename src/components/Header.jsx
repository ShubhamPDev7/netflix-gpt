import React, { useEffect } from "react";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).catch(() => {
      navigate("/error");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <header className="absolute top-0 z-30 flex w-full items-center justify-between bg-gradient-to-b from-black/90 via-black/50 to-transparent px-4 py-2.5 sm:px-8 sm:py-3.5 transition-all">
      <img
        className="w-24 cursor-pointer object-contain transition hover:opacity-90 sm:w-36 md:w-44"
        src={NETFLIX_LOGO}
        alt="netflix-logo"
        onClick={() => {
          if (showGptSearch) dispatch(toggleGptSearchView());
        }}
      />

      {user && (
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className="rounded bg-purple-700 px-2.5 py-1.5 text-xs font-semibold text-white shadow transition hover:bg-purple-800 active:scale-95 sm:px-4 sm:py-2 sm:text-sm"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

          <img
            className="h-7 w-7 rounded object-cover ring-1 ring-zinc-700 sm:h-9 sm:w-9"
            src={USER_ICON}
            alt="user-icon"
          />

          <button
            onClick={handleSignOut}
            className="rounded px-1.5 py-1 text-xs font-semibold text-zinc-300 transition hover:text-red-500 sm:text-sm"
          >
            Sign out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
