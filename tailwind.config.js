/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue : "hsl(233, 26%, 24%)",
        limeGreen :"hsl(136, 65%, 51%)",
        brightCyan : "hsl(192, 70%, 51%)",
        grayish : "hsl(233, 8%, 62%)",
        lightGrayish: "hsl(220, 16%, 96%)",
        lightGray: "hsl(0, 0%, 98%)",
        customWhite : "hsl(0, 0%, 100%)",
        customGreen: "#30c792"
      },
      fontSize: {
        default: "18px"
      },
      fontFamily: {
        publicSans: ['Public Sans', "sans-serif"]
      },
      container:{
        center:true,
      },
      backgroundImage:{
        desktop: "url('/src/images/bg-intro-desktop.svg')",
        mobile: "url('/src/images/bg-intro-mobile.svg')",
      },
      height: {
        120: "30rem",
        200: "50rem"
      },
      width:{
        140: "35rem",
        360: "90rem"
      }
    },
  },
  plugins: [],
}


