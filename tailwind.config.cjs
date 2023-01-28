/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-veryDarkMagenta": "hsl(300, 43%, 22%)",
        "c-softPink": "hsl(333, 80%, 67%)",
        "c-darkGrayishMagenta": "hsl(303, 10%, 53%)",
        "c-lighGrayishMagenta": "hsl(300, 24%, 96%)",
      },
      fontWeight: {
        "cf-400": "400",
        "cf-500": "500",
        "cf-700": "700",
      },
    },
  },
  plugins: [],
};
