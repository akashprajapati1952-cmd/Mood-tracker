/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mood tracker ke liye kuch calm colors add kar dete hain
        primary: "#6366f1", 
        secondary: "#a855f7",
      },
    },
  },
  plugins: [],
}
