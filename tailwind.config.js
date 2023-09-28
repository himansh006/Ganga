/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryBlue: "rgba(55,88,130)",
      primaryRed: "rgba(221,83,90)",
      primaryGreen: "rgba(100,179,72)",
      white : {
        100 : "rgba(247, 247, 247)",
        800 : "rgba(255, 255, 255)",
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
