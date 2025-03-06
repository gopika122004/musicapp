/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: "#0B3D91",
        brightBlue: "#00509E",
        sunYellow: "#FFB400",
        lightBlue: "#A1C9F1",
        orangeHover: "#FF8C00",
      },
    },
  },
  plugins: [],
};
