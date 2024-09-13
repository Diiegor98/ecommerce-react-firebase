/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paletteDarkGreen: "#283618",
        paletteLightGreen: "#606c38",
        paletteBone: "#fefae0",
        paletteLightBrown: "#dda15e",
        paletteBrown: "#582f0e",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
  },
};
