/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)'],
        italic: ['var(--font-satoshi-italic)'],
      },
      colors: {
        primary: "#749781",
        secondary: "#314C59",
        background: "#F1F1EA",
      }
    },
  },
  plugins: [],
};
