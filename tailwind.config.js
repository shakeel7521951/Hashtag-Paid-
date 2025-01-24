/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensures Tailwind scans the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all JS, TS, JSX, TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Custom Font"', 'serif'], // Define your custom font
        customLight: ['"Custom Font Light"', 'serif'], // Define a light variant
      },
      // You can add more customizations here, like colors or spacing
      colors: {
        customGray: '#f5f5f5', // Example of a custom color
        customDark: '#333333', // Another custom color
      },
    },
  },
  plugins: [],
};
