/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crem: "#f4f2e9",
        brown: "#58371F",
        bannerRed: "#D05353",
      },
      boxShadow: {
        around: "0px 0px 5px -2px rgba(59,130,246,1)",
      },
    },
  },
  plugins: [],
};
