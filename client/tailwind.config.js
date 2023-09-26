/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },

    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'primary': '#9010c7',
        'light': '#f1f1f1',
        'hover': '#e5e5e5'
      },
    },
  },
  plugins: [],
  darkMode: "class"
}