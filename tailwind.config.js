/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage:{
        'background-hero':"url('../images/background-hero.png')",
        'background-join':"url('../images/background-join.png')",
        'background-footer':"url('../images/background-footer.png')"
      }
    },
  },
  plugins: [],
}
