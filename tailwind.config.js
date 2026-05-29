export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'Cabinet Grotesk'", "sans-serif"],
      },
      colors: {
        accent: "#00ff87",
        surface: "#0d0d0d",
      },
    },
  },
  plugins: [],
};
