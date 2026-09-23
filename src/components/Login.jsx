import React, { useState } from "react";
import Header from "./Header";
import { NETFLIX_BG_IMG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src={NETFLIX_BG_IMG}
          alt="bg-img"
          className="h-full w-full object-cover brightness-50"
        />
      </div>
      <form
        onClick={(e) => e.preventDefault()}
        className="absolute left-0 right-0 top-36 mx-auto w-full max-w-sm rounded bg-black/75 p-10 text-white"
      >
        <h1 className="py-4 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-2 w-full rounded bg-zinc-800 p-3 text-sm outline-none focus:ring-1 focus:ring-zinc-500"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="my-2 w-full rounded bg-zinc-800 p-3 text-sm outline-none focus:ring-1 focus:ring-zinc-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="my-2 w-full rounded bg-zinc-800 p-3 text-sm outline-none focus:ring-1 focus:ring-zinc-500"
        />
        <button className="my-6 w-full rounded bg-red-600 p-3 font-semibold hover:bg-red-700 cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="mt-10 text-sm text-zinc-400">
          {isSignInForm ? "New to Netflix" : "Already registered?"}
          <span
            onClick={toggleSignInForm}
            className=" mx-2 cursor-pointer font-medium text-white hover:underline"
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
