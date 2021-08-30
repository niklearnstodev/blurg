module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: "#7c3aed",
              fontSize: "30px",
              marginBottom: "0px",
              lineHeight: "36px",
            },
            h4: {
              margin: "0px 0px",
            },
          },
        },
      },
    },
    fontFamily: {
      custom: "DM Mono",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
