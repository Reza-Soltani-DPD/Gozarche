/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  // purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        primary:{
          50:"#ffece6",
          100:"#ffc5b3",
          200:"#ff9e80",
          300:"#ff774d",
          400:"#ff501a",
          500:"#ff3c00",
          600:"#cc3000",
          700:"#992400",
          800:"#661800",
          900:"#330c00",
        }
      },
      fontFamily:{
        yekan:['yekan'],
        iransans:['iransans'],
        samim:['samim'],
        homa:['homa'],
        vazir:['vazir']
      }
    },
  },
  plugins: [],
}