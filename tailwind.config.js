/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        tealDark: "#004E57",   // Main brand color from flyer
        goldLight: "#FCEED8",  // Optional soft accent
        brandBlack: "#000000",
        brandWhite: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
