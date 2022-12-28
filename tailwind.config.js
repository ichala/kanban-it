/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      display: ['Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'],
    },
    extend: {},
  },
  daisyui: {
    themes: ["night", "cupcake", "halloween", "valentine", "lemonade", "winter"],
  },
  plugins: [require('daisyui')],
};
