/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveout: 'moveout 1s forwards',
        move: 'move 1s forwards',
        moveleft:'moveleft 1s forwards',
      },
      screens: {
        'xs': '200px', // Custom screen size for extra small screens
         'xl':'1200px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
      },
      keyframes: {
        moveout: {
          '0%': {
            transform: 'translateY(0)', 
            opacity: 0,
          },
          '100%': { 
            transform: 'translateY(20px)',
            opacity: 1,
          },
        },
        move: {
          '0%': {
            transform: 'translateY(20px)', 
            transform: 'translatex(-20px)', 
            opacity: 0,
          },
          '100%': { 
            transform: 'translateY(0px)',
            transform: 'translatex(0px)', 
            opacity: 1,
          },
          
        },
        moveleft: {
          '0%': {
            transform: 'translateY(20px)', 
            transform: 'translatex(20px)', 
            opacity: 0,
          },
          '100%': { 
            transform: 'translateY(0px)',
            transform: 'translatex(0px)', 
            opacity: 1,
          },
          
        },
      },
    },
  },
  plugins: [],
}