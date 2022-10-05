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
        background: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#262626",
          900: "#121212",
        },
        gradient: {
          start: "#749A81",
          middle: "#3C6970",
          end: "#2F4858",
        }
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
