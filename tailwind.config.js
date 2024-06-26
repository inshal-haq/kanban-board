/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000112",
      "very-dark-gray": "#20212C",
      "dark-gray": "#2B2C37",
      "lines-dark": "#3E3F4E",
      "medium-gray": "#828FA3",
      "lines-light": "#E4EBFA",
      "light-gray": "#F4F7FD",
      white: "#FFFFFF",
      "main-green": "#4FB286",
      "main-green-hover": "#3D8B70",
      red: "#EA5555",
      "red-hover": "#FF9898",
    },
    extend: {},
  },
  plugins: [],
};
