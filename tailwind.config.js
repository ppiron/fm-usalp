module.exports = {
  purge: [],
  theme: {
    colors: {
      white: "#fff",
      cyan: "hsl(180, 66%, 49%)",
      violet: {
        lighter: "hsl(257, 7%, 63%)",
        default: "hsl(257, 27%, 26%)",
        dark: "hsl(260, 8%, 14%)",
      },
      red: "hsl(0, 87%, 67%)",
      gray: "hsl(0, 0%, 75%)",
      darkBlue: "hsl(255, 11%, 22%)",
    },
    extend: {
      screens: {
        xxl: "1440px",
      },
      fontSize: {
        "7xl": "5rem",
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
