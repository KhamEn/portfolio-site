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
      "light-shade": "#c1c3be",
      "light-accent": "#E0CAAD",
      brand: "#ffa349",
      "dark-accent": "#B5B56A",
      "dark-shade": "#1c282c",
      external: "#64bfc9",
      "second-dark-shade": "#0b2449",
      ring: "#ff86e8",
    },

    extend: {
      fontSize: {
        "-fluid-1": "clamp(0.94rem, calc(0.88rem + 0.31vw), 1.00rem)",
        "fluid-0": "clamp(1.13rem, calc(1.00rem + 0.63vw), 1.60rem)",
        "fluid-1": "clamp(1.35rem, calc(1.13rem + 1.08vw), 2.00rem)",
        "fluid-2": "clamp(1.62rem, calc(1.27rem + 1.74vw), 2.67rem)",
        "fluid-3": "clamp(1.94rem, calc(1.41rem + 2.68vw), 3.55rem)",
        "fluid-4": "clamp(2.33rem, calc(1.53rem + 4.01vw), 4.74rem)",
        "fluid-5": "clamp(2.80rem, calc(1.63rem + 5.86vw), 6.31rem)",
      },
      spacing: {
        "fluid-2xs": "clamp(0.50rem, calc(0.44rem + 0.31vw), 0.69rem)",
        "fluid-xs": "clamp(0.75rem, calc(0.65rem + 0.52vw), 1.06rem)",
        "fluid-s": "clamp(1.00rem, calc(0.88rem + 0.63vw), 1.38rem)",
        "fluid-s-xl": "clamp(1.00rem, calc(-1.42rem + 12.08vw), 8.25rem)",
        "fluid-2xs-s": "clamp(0.50rem, calc(-0.02rem + 2.60vw), 2.06rem)",
        "fluid-m-lg": "clamp(1.50rem, calc(1.08rem + 2.08vw), 2.75rem)",
      },
      boxShadow: {
        "3d-xl-br":
          "1px 1px 0px,2px 2px 0px,3px 3px 0px,4px 4px 0px,5px 5px 0px,6px 6px 0px,7px 7px 0px,8px 8px 0px,9px 9px 0px,10px 10px 0px,11px 11px 0px,12px 12px 0px",
        "3d-lg-bl":
          "-1px 1px 0px,-2px 2px 0px,-3px 3px 0px,-4px 4px 0px,-5px 5px 0px,-6px 6px 0px,-7px 7px 0px,-8px 8px 0px,-9px 9px 0px",
        "3d-lg-br":
          "1px 1px 0px,2px 2px 0px,3px 3px 0px,4px 4px 0px,5px 5px 0px,6px 6px 0px,7px 7px 0px,8px 8px 0px,9px 9px 0px",
        "3d-md-tl":
          "-1px -1px 0px,-2px -2px 0px,-3px -3px 0px,-4px -4px 0px,-5px -5px 0px",
        "3d-md-tr":
          "1px -1px 0px,2px -2px 0px,3px -3px 0px,4px -4px 0px,5px -5px 0px",
        "3d-md-br":
          "1px 1px 0px,2px 2px 0px,3px 3px 0px,4px 4px 0px,5px 5px 0px",
        "3d-sm-bl": "-1px 1px 0px,-2px 2px 0px,-3px 3px 0px,-4px 4px 0px",
        "3d-sm-tr": "1px -1px 0px,2px -2px 0px,3px -3px 0px",
        "plane-br": "9px 9px 0px",
      },
      backgroundImage: {
        "project-scheme-bank":
          "url('../assets/projects/scheme-bank-desktop.png')",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["focus-visible"],
      ringColor: ["focus-visible"],
      ringOffsetWidth: ["focus-visible"],
      ringOffsetColor: ["focus-visible"],
    },
  },
  plugins: [],
};
