const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ui: ["DM Sans", ...defaultTheme.fontFamily.sans],
      sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      mono: ["DM Mono", ...defaultTheme.fontFamily.mono],
    },
    colors: {
      yellow: "#FBBC04",
      "light-teal": "#D7F5E9",
      teal: "#009a9d",
      "dark-teal": "#164e4f",
      "extra-light-orange": "#ffe5dd",
      "light-orange": "#FCCBBC",
      orange: "#F15627",
      "dark-orange": "#C4441D",
      tan: "#FDCDA4",
      charcoal: {
        100: "#ECECED",
        200: "#D8D9DB",
        300: "#B2B3B7",
        400: "#8B8D92",
        500: "#65676E",
        600: "#4B4E55",
        700: "#32343B",
        800: "#2727C",
        900: "#131416",
      },
    },
  },

  plugins: [],
};
