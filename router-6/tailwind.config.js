module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    opacity: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      10: ".1",
      20: ".2",
      30: ".3",
      40: ".4",
      60: ".6",
      70: ".7",
      80: ".8",
      90: ".9",
      100: "1",
      inherit: "inherit",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
