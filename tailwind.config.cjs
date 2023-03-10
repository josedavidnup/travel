/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('./src/assets/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        yosemite: "url('./src/assets/img/yosemite.jpg')",
        LA: "url('./src/assets/img/LA.jpg')",
        seattle: "url('./src/assets/img/seattle.jpg')",
        new_york: "url('./src/assets/img/new_york.jpg')",
        norway: "url('./src/assets/img/norway.jpg')",
        sydney: "url('./src/assets/img/sydney.jpg')",
        miami: "url('./src/assets/img/miami.jpg')",
        switzerland: "url('./src/assets/img/switzerland.jpg')",
        bali: "url('./src/assets/img/bali.jpg')",
        norway: "url('./src/assets/img/norway.jpg')",
        chicago: "url('./src/assets/img/chicago.jpg')",
        europe: "url('./src/assets/img/europe.jpg')",
        iceland: "url('./src/assets/img/iceland.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      }),
      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Monterrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
