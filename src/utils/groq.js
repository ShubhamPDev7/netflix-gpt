import Groq from "groq-sdk";

console.log("Groq Key Loaded:", Boolean(import.meta.env.VITE_GROQ_API_KEY));

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default groq;
