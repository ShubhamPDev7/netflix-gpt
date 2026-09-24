import React from "react";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute top-0 z-20 flex w-full items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent px-8 py-3">
      <img
        className="w-36 cursor-pointer transition hover:opacity-90 sm:w-44"
        src={NETFLIX_LOGO}
        alt="netflix-logo"
      />

      {user && (
        <div className="flex items-center gap-3">
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
