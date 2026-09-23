import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_BG_IMG } from "../utils/constants";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleBtnClick = () => {
    // validate the form data

    console.log(email.current.value);
    console.log(password.current.value);
    console.log(name.current.value);
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value,
    );
    console.log(message);
    setErrorMessage(message);

    // Sign / Sign up
  };

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
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-0 right-0 top-36 mx-auto w-full max-w-sm rounded bg-black/75 p-10 text-white"
      >
        <h1 className="py-4 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-2 w-full rounded bg-zinc-800 p-3 text-sm outline-none focus:ring-1 focus:ring-zinc-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-2 w-full rounded bg-zinc-800 p-3 text-sm outline-none focus:ring-1 focus:ring-zinc-500"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 w-full rounded bg-zinc-800 p-3 text-sm outline-none focus:ring-1 focus:ring-zinc-500"
        />
        <p className="text-red-500 font-bold text-lg p-2 ">{errorMessage}</p>
        <button
          className="my-6 w-full rounded bg-red-600 p-3 font-semibold hover:bg-red-700 cursor-pointer"
          onClick={handleBtnClick}
        >
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
