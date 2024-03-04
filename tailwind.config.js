import daisyui from "daisyui";
import scrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [daisyui, scrollbarHide],
  
  daisyui: {
    themes: false,
    darkTheme: "light",
    base: false,
  },
}