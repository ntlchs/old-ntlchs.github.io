/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
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
