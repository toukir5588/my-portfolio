module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#00C9B8',
        'background-light': '#f6f6f8',
        'background-dark': '#0A192F',
        'accent': '#64FFDA',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
};