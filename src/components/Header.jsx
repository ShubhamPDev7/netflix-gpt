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
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute top-0 z-20 flex w-full items-center justify-between bg-linear-to-b from-black/80 via-black/40 to-transparent px-8 py-3">
      <img
        className="w-36 cursor-pointer transition hover:opacity-90 sm:w-44"
        src={NETFLIX_LOGO}
        alt="netflix-logo"
      />

      {user && (
        <div className="flex items-center gap-3">
          <button
            className="m-2 rounded bg-purple-800 px-4 py-2 font-medium text-white hover:bg-purple-900"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="h-9 w-9 rounded object-cover ring-1 ring-zinc-700"
            src={USER_ICON}
            alt="user-icon"
          />

          <button
            onClick={handleSignOut}
            className="rounded px-2 py-1 text-sm font-semibold text-white transition hover:text-red-500 cursor-pointer"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
