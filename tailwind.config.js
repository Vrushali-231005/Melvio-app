/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#f4e2d1",
          text: "#573d36",
          "text-secondary": "#b16a59",
          card: "#edaa8a",
          primary: "#b16a59",
          secondary: "#ea9178",
          accent: "#c17a6a",
        },
        dark: {
          bg: "#0b1d32",
          text: "#ffffff",
          "text-secondary": "#a0aec0",
          card: "#172a42",
          primary: "#80AACC",
          secondary: "#A8C8E8",
          accent: "#4878A0",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand-Regular", "sans-serif"],
        "quicksand-500": ["Quicksand-Medium", "sans-serif"],
        "quicksand-600": ["Quicksand-SemiBold", "sans-serif"],
        "quicksand-700": ["Quicksand-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};