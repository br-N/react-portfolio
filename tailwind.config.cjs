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
      white: "#f8efe8",
      salmon: "#ec6161",
      yellow: "#f1ce73",
      yellow2: "#fcae11",
      blue: "#12495f",
      green: "#b2a700",
      cyan: "#5bcebf",
      pink: "#ed0b65",
      purple: "#770493",
    },
  },
  plugins: [],
};
