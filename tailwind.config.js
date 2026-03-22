/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand_400Regular"],
        "quicksand-500": ["Quicksand_500Medium"],
        "quicksand-600": ["Quicksand_600SemiBold"],
        "quicksand-700": ["Quicksand_700Bold"],
      },
    },
  },
  plugins: [],
};
