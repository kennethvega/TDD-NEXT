/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      green: "#0A91B1",
      green2: "#1B8098",
      gray: "#d1d5db",
      dark: "#374151",
      gray0: "#E0E0E0",
      blue: "#2563eb",
      red: "#dc2626",
      red2: "#b91c1c",
      red0: "#fee2e2",
      black: "#000",
    },
    extend: {},
  },
  plugins: [],
};
