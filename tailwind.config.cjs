/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        maven: ["Maven Pro", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
      },
    },
    colors: {
      black: "#121619",
      white: "#f8efe8",
      salmon: "#ec6161",
      yellow: "#f1ce73",
      blue: "#12495f",
    },
  },
  plugins: [],
};
