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
      bg: "#121619",
      blue: "#12495f",
      salmon: "#ec6161",
      yellow: "#f1ce73",
      white: "#f8efe8",
    },
  },
  plugins: [],
};
