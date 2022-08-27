/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grayish: "#F9F9F9",
        "navbar-color": "#100F0F",
        "home-cards": "#010204",
        "shop-cards": "#ebecf0",
      },
    },
  },
  plugins: [],
};
