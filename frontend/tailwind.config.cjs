/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crem: "#f4f2e9",
        brown: "#58371F",
        lightBrown: "#95623D",
        bannerRed: "#D05353",
      },
      boxShadow: {
        aroundBlue: "0px 0px 5px -2px rgba(59,130,246,1)",
        aroundGray: "0px 0px 3px 0px #DBDBDB",
      },
    },
  },
  plugins: [],
};
