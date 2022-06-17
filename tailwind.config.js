/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        waiteerPink: '#f68a9a',
        grayBg: '#f9f9f9',
      },
      backgroundImage: {
        hero_image: "url('../public/hero_image.jpeg)",
      },
    },
  },
  plugins: [],
};
