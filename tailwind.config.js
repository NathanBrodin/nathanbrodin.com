/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
        italic: ["Satoshi-Italic", "sans-serif"],
      },
      colors: {
        primary: "#749781",
        secondary: "#314C59",
        background: "#F1F1EA"
      },
    },
  },
  plugins: [],
};
