/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0d7ff2",
        "accent-green": "#00FF85",
        "background-light": "#f5f7f8",
        "background-dark": "#101922",
        "surface-dark": "#1A1A1A",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      boxShadow: {
        "glow-primary": "0 0 15px 0 rgba(13, 127, 242, 0.6)",
        "glow-shadow": "0 0 5px #0d7ff2, 0 0 10px #0d7ff2, 0 0 15px #0d7ff280",
        "secondary-glow-shadow":
          "0 0 5px #0d7ff240, 0 0 10px #0d7ff230, 0 0 15px #0d7ff220",
        "glow-green": "0 0 15px 0 rgba(0, 255, 133, 0.6)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
