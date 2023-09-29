/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "dmsans": ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        'ascent': "#FF5001",
        'light-ascent': "#ff5101ae",
        'background': "#0f0f0f",
        'light': '#EFEFEF',
        'dark-gray': "#231F20",
        "gray": "#373334",
        "border-gray": "#3E393A",
        "light-gray": "#646368",
        "blend-light": "#c1c1c1"
      }
    },
  },
  plugins: [],
}