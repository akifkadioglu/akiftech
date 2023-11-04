/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
//        sans: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}