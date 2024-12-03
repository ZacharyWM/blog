/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
import { customThemes } from "./frontend/style/tailwind-custom-themes";
import { darkTheme, lightTheme } from "./frontend/style/tailwind-custom-themes";

// ref: https://github.com/HamedBahram/next-ui/blob/main/tailwind.config.ts

module.exports = {
  content: [
    "./frontend/**/*.{html,js,ts,tsx}",

    // The following line seems unnecessary:
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: darkTheme, // default theme from the themes object
      defaultExtendTheme: darkTheme, // default theme to extend on custom themes
      layout: {
        disabledOpacity: "0.3",
        radius: {
          small: "1px",
          medium: "2px",
          large: "4px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      }, // common layout tokens (applied to all themes)
      themes: customThemes,
    }),
  ],
};
