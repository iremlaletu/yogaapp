/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Inter",
      secondary: "Open Sans",
    },
    container: {
      padding: {
        DEFAULT: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1038px",
    },
    extend: {
      colors: {
        primary: {
          100: "#79031D",
          200: "#F21137",
        },
        neutral: {
          400: "#595962",
          500: "#131316",
        },
      },
    },
  },
  plugins: [],
};
