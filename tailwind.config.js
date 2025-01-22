/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Custom Font"', 'serif'],
        customLight:["Custom Font light",'serif'] // Example with a different custom font
      },
    },
  },
  plugins: [],
}