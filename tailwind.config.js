module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    "gatsby-plugin-postcss",
    // ...
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#393939",
      },
      fontFamily: {
        raleway: ["'Raleway'", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
      },
    },
  },
}
