/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 এই লাইনটি থাকতেই হবে
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
      },
    },
  },
  plugins: [],
}