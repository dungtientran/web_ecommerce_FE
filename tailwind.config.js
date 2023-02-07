/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        loginbg: 'linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%)'
      }
    },
    keyframes:{
      wiggle: {
        '0%': {
          width: '0%'
        },
        '100%': {
          width: '100%'
        },
      },
      textInputSearch: {
        '0%': {
          opacity: '0.1'
        },
        '100%': {
          opacity: '1'
        },
      },
      arrowSearch: {
        '0%': {
          right: '10%',
          opacity: '0.1'
        },
        '100%': {
          right: '0',
          opacity: '1'
        },
      },
    },
    animation: {
          wiggle: 'wiggle 1s',
          textInputSearch: 'textInputSearch 2s',
          arrowSearch: 'arrowSearch 1s',
    }
  },
  plugins: [],
}