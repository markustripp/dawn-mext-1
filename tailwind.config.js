module.exports = {
  prefix: "x",
  content: ["./**/*.{liquid,css}"],
  theme: {
    screens: {
      md: "750px",
      lg: "990px",
    },
    extend: {
      fontFamily: {
        heading: "var(--font-heading-family)",
      },
    },
  },
  plugins: [],
};
