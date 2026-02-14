/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#D92525', // Fire red
        'brand-orange': '#F29F05', // Grill fire
        'brand-dark': '#1A1A1A', // Charcoal background
        'brand-yellow': '#F2CB05', // Fries/Mustard
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add font link in index.html
      },
    },
  },
  plugins: [],
}
