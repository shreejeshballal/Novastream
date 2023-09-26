/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "dmSans": ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        'ascent': "#FF5001",
        'background': "#0F0F0F",
        'light': '#EFEFEF',
        'dark-gray': "#231F20",
        "gray": "#373334",
        "border-gray": "#3E393A",
        "light-gray": "#646368"
      }
    },
  },
  plugins: [],
}