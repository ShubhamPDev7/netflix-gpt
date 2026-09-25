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
    // validate the form data

    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = isSignInForm ? null : name.current.value;

    // console.log(emailValue);
    // console.log(passwordValue);
    // console.log(nameValue);
    const message = checkValidData(emailValue, passwordValue, nameValue);
    // console.log(message);
    setErrorMessage(message);

    if (message) return;

    // Sign In Sign Up Logic

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName }),
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
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
