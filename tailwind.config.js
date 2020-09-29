module.exports = {
  purge: {
    enabled: true,
    content: ["./index.html"],
  },
  theme: {
    colors: {
      white: "#fff",
      cyan: { default: "hsl(180, 66%, 49%)", ligher: "#9be3e2" },
      violet: {
        lightest: "#f0f1f6",
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
        xsm: "375px",
        xxl: "1440px",
      },
      fontSize: {
        "7xl": "5rem",
      },
      spacing: {
        22: "5.5rem",
        44: "11rem",
        52: "13rem",
        68: "17rem",
        70: "17.5rem",
        72: "18rem",
        76: "19rem",
      },
      inset: {
        12: "3rem",
        24: "6rem",
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
