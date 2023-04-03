/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Quintessential: ["Quintessential", "sans"],
    },
    colors: {
      bgForm: "#EFF0EE",
      bgInput: "#FDFEFE",
      bgButtonLogin: "#F4A82B",
      bgIconLogin: "#C04933",
      white: "#fff",
      yellow1: "#F9CD58",
      gray1: "#b8b8b8",
    },
    extend: {
      backgroundImage: {
        Sunflower: "url('./src/assets/SunflowerBg.png')",
        Sunshine: "url('./src/assets/SunshineBg.png')",
      },
    },
  },
  plugins: [],
};
