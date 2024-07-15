/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cust: ["Righteous", "sans-serif"],
        cust1: ["Titan One", "sans-serif"],
      },
      backgroundImage: {
        "image": "bg-[url('src/assets/lama.png')]"
      },
      
    },
    colors: {
      'serene_blue': '#5DADE2',
      'dalai_red': '#780000',
      'gold': '#F4D03F'
    }
  },
  plugins: [],
}

