const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/app/**/*.{js,jsx,ts,tsx}",
    "src/pages/**/*.{js,jsx,ts,tsx}",
    "src/lib/components/**/*.{js,jsx,ts,tsx}",
    "src/lib/layout/**/*.{js,jsx,ts,tsx}",
    "src/lib/pages/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Recursive", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
