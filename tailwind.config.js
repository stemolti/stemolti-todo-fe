/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui"),require('flowbite/plugin')],
  daisyui: {
    themes: true,
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
