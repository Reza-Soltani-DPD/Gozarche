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
        screens:{
          'xs':'480px'
        },
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
        },
        secondary:{
          50:"#e6fff6",
          100:"#b3ffe4",
          200:"#80ffd2",
          300:"#4dffc0",
          400:"#1affae",
          500:"#00ffa5",
          600:"#00cc84",
          700:"#009963",
          800:"#006642",
          900:"#001910",
        }
      },
      fontFamily:{
        yekan:['yekan'],
        iransans:['iransans'],
        samim:['samim'],
        homa:['homa'],
        vazir:['vazir'],
        FDdirooz:['diroozFD'],
        FDparastoo:['parastooFD'],
        FDsahel:['sahelFD'],
        FDsamim:['samimFD'],
        FDvazir:['vazirFD'],
      },
      boxShadow:{
        "center":"0 0 0.5rem 0 rgba(0 , 0 , 0 , 0.15)"
      }
    },
  },
  plugins: [],
}