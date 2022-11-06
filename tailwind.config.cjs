/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src-front/**/*.{html,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      keyframes: {
        "spin-loading": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(2880deg)" },
        },
      },
      animation: {
        "spin-loading": "spin-loading 5s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
