
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        principal: "#24292e",
        complementary: "#586069",
      },
      colors: {
        primary: "#0366d6",
        secondary: "#24292e",
        gray: "#e1e4e8",
      },
    },
  },
  plugins: [],
};
