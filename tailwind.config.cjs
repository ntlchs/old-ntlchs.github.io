/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        lalezar: ["Lalezar", "cursive"],
        tourney: ["Tourney", "cursive"],
      },
      boxShadow: {
        "5xl": "1px 1px 0, 2px 2px 0, 3px 3px 0, 4px 4px 0, 5px 5px 0",
      },
    },
    colors: {
      "n-black": "#000",
      "n-white": "#fffffc",
      "n-red": "#ff2f00",
      "n-green": "#1fa95b",
      "n-yellow": "#fdc62e",
      "n-purple": "#a39df7",
      "n-pink": "#e339fc",
      "n-lightgreen": "#b1ebd3",
    },
  },
  plugins: [],
};
