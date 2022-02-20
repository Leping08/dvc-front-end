module.exports = {
  purge: {
    options: {
      safelist: [...require("vantage-ui/dist/safelist").vantageSafelist()]
    },
    content: [
      "./src/**/*.vue",
      "./src/**/*.js",
      "./node_modules/vantage-ui/src/lib-components/**/*.vue",
      "./node_modules/vantage-ui/src/lib-components/**/*.js"
    ]
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: require("tailwindcss/colors")
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"]
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
