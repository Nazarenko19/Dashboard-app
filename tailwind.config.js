module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
    },
    extend: {
      colors: {
        boulder: {
          50: "#f8f8f8",
          100: "#f2f2f2",
          200: "#dedede",
          300: "#cacaca",
          400: "#a2a2a2",
          500: "#7a7a7a",
          600: "#6e6e6e",
          700: "#5c5c5c",
          800: "#494949",
          900: "#3c3c3c",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
