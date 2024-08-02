/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#27ae60',
        'light-grey': '#535353',
        'grey': "#212121",
        'black': "#171717"
      }
    },
  },
  plugins: [],
}