import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_BG_IMG } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleBtnClick = () => {
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const nameValue = isSignInForm ? null : name.current?.value;

    const message = checkValidData(emailValue, passwordValue, nameValue);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(`${error.code} - ${error.message}`);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue).catch(
        (error) => {
          setErrorMessage(`${error.code} - ${error.message}`);
        },
      );
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <Header />

      {/* Fixed Fullscreen Background */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <img
          src={NETFLIX_BG_IMG}
          alt="bg-img"
          className="h-full w-full object-cover brightness-50"
        />
      </div>

      {/* Centered responsive container */}
      <main className="flex min-h-screen items-center justify-center px-4 py-24 sm:px-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-[420px] rounded-lg bg-black/80 p-6 sm:p-10 text-white shadow-2xl backdrop-blur-sm"
        >
          <h1 className="py-2 text-2xl font-bold sm:text-3xl sm:py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="my-2.5 w-full rounded bg-zinc-800/90 p-3 text-sm outline-none ring-1 ring-zinc-700/50 focus:ring-1 focus:ring-zinc-400"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="my-2.5 w-full rounded bg-zinc-800/90 p-3 text-sm outline-none ring-1 ring-zinc-700/50 focus:ring-1 focus:ring-zinc-400"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-2.5 w-full rounded bg-zinc-800/90 p-3 text-sm outline-none ring-1 ring-zinc-700/50 focus:ring-1 focus:ring-zinc-400"
          />

          {errorMessage && (
            <p className="py-2 text-xs font-semibold text-red-500 sm:text-sm">
              {errorMessage}
            </p>
          )}

          <button
            className="my-5 w-full rounded bg-red-600 py-3 text-sm font-semibold transition hover:bg-red-700 active:scale-[0.98] sm:text-base cursor-pointer"
            onClick={handleBtnClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="mt-6 text-xs text-zinc-400 sm:text-sm">
            <span>
              {isSignInForm ? "New to Netflix?" : "Already registered?"}
            </span>
            <span
              onClick={toggleSignInForm}
              className="ml-2 cursor-pointer font-medium text-white hover:underline"
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
