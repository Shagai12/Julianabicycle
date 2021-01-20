module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '10vh': "10vh",
        '20vh': "20vh",
        '30vh': "30vh",
        '40vh': "40vh",
        '50vh': "50vh",
        '60vh': "60vh",
        '70vh': "70vh",
        '80vh': "80vh",
        '90vh': "90vh",
        '100vh': "100vh",
      },
      inset: {
        '1/2': "50%",
      },
      fontFamily: {
        main: ['Montserrat'],
      },
      fontSize: {
        '2xs': "0.65rem"
      },
      colors: {
        dark: "#181818",
        primary: "#d29e0e",
        secondary: "#e5001c",
        hover: "#ba8c0c"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
