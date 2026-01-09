/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pitch: "#0f3d2e",        // verde cancha
        night: "#020617",        // oscuro elegante
        grass: "#15803d",        // verde intenso
        accent: "#facc15",
      },
      backgroundImage: {
    "app-gradient":
        "linear-gradient(180deg, #0f2540ff 0%, #283f5fff 100%)",
        "hero-mundial": "url('./src/assets/logoMundial.png')",
  },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
