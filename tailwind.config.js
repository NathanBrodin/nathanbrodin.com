/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#331a3a",
        secondary: "#1e132e",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
