/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBgColor: '#000123', // You can name your color and provide the hex code
        yellowColor: '#FFDE59',
        btnColor : '#5CE1E6',
        // Add more custom colors here
      },
    },
  },
  plugins: [],
};
