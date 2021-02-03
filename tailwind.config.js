module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
    },
    extend: {
      fontSize: {
        "1xs": ".60rem",
        xs: ".65rem",
        sm: ".75rem",
        base: ".85rem",
      },
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
        graph: {
          100: "#b2b2b2",
          200: "#999999",
          300: "#666666",
        },
        borderColor: {
          default: "#cacaca",
        },
      },
      height: {
        lock: "14.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
