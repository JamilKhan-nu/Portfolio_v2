const { transform } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: { 
        colors: {
        transparent: "transparent",
        white: "#ffffff",
        grey: "#F1EFEF",
        beige: "#EBE4D1",
        brown: "#EAD7BB",
        coffee: "#BCA37F",
        navy: "#113946",
        sky: "#0c4a6e",
        "bubble-gum": "#ff77e9",
      },
      fontFamily: {
        Allura: ["Allura", "cursive"],
      },
      container: {
        center: true,
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite'
      },
      keyframes:{
        marquee: {
            '0%': {transform: 'translateX(0%)'},
            '100%': {transform: 'translateX(-100%)'}
        },
        marquee2: {
            '0%': {transform: 'translateX(100%)'},
            '100%': {transform: 'translateX(0%)'}
        }
      },
    },
    },
    plugins: [],
  }