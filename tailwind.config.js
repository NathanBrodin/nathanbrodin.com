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
        primary: {
          100: "#7FA689",
          200: "#749A81",
          300: "#6A8E7A",
          400: "#5F8272",
          500: "#55766A",
          600: "#4A6962",
          700: "#3F5D5B",
          800: "#355153",
          900: "#2A454B",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
