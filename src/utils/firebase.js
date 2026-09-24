// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLPNr7n8BoSk_NoVjMRQiAtiLITY6jdVs",
  authDomain: "netflixgpt-53edb.firebaseapp.com",
  projectId: "netflixgpt-53edb",
  storageBucket: "netflixgpt-53edb.firebasestorage.app",
  messagingSenderId: "1010479249175",
  appId: "1:1010479249175:web:61b38dc2559df40345a952",
  measurementId: "G-NECEVY1QHQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
