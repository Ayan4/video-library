module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "black-1": "#1f1f1f",
        "black-2": "#454545",
        "white-0": "#EDEDED",
        "white-1": "#E2E2E2",
        "white-2": "#c4c4c4",
        "gray-1": "#737373",
        // "primary-red": "#A51818",
        "primary-red": "#B32E04",
        transparent: "transparent"
      },
      height: {
        18: "4.5rem"
      },
      borderColor: theme => ({
        ...theme("colors"),
        primary: "#A51818"
      }),
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        mont: "'Montserrat', sans-serif"
      },
      backgroundImage: theme => ({
        "playlist-banner":
          "url(https://images.unsplash.com/photo-1616356601595-8af46b090cc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
      }),
      keyframes: {
        spinner: {
          "0%, 100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        spinner: "spinner 1s ease infinite"
      },
      screens: {
        xs: "387px",
        "3xl": "2027px"
      }
    },
    zIndex: {
      "-1": "-1",
      "-2": "-2"
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      opacity: ["active"]
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio")]
};
