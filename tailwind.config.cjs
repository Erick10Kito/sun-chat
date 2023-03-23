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
    },
    extend: {
      backgroundImage: {
        Sunflower: "url('./src/assets/SunflowerBg.png')",
      },
    },
  },
  plugins: [],
};
