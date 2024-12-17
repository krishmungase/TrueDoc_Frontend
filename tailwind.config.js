/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#425e6e",
        secondary: "#dde8ed",
        turnary: "#f2f6f7",
      },
    }
  },
  plugins: [],
}