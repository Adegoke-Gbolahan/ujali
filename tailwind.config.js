/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
      }),
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lato: ["lato", "sans-serif"],
      roboto: ["roboto", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      grey: "#A7A7A7",
      "grey-rgba": "rgba(217, 217, 217, 0.13)",
      "input-grey-rgba": "rgba(255, 255, 255, 0.12)",
      "subscribe-rgba": "rgba(200, 203, 222, 0.53)",
      "learnmore-gray": "rgba(241,241,241,1)",
      custom1: "rgba(248, 248, 248, 0.34)",
      custom2: "rgba(250, 250, 250, 1)",
      primary: {
        green: "#08AC04",
        blue: "#0F2A6F",
        grey: "#CCCCCC",
        lightGrey: "#F8F8FA",
        red: "#FF0000",
        orange:"#FF6B00",
        lightGreen:"#1ACE0A0A"
      },
      secondary: {
        green: "#084C04",
        blue: "#0F216F",
        grey: "#F8F8F1",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
