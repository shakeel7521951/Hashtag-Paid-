/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensures Tailwind scans the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all JS, TS, JSX, TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Custom Font"', 'serif'],
        customLight: ["Custom Font light", 'serif'] // Example with a different custom font
      },
      // Adding animation for card effect on main landing page:
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
