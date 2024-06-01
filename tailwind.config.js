/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        colors: {
          primary: "#EEEEEE",
          secondary: "#FEFEFE",
          tertiary: "#909090",
          quaternary: "#363636",
          quinary: "#304FFF",
          dark_bg: "#221C3E",
          dark_card: "#0F0920",
        },
      },
    },
  },
  plugins: [],
};
