module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        mediumFont: "17px",
        pxl: ["1.6rem", "2rem"],
      },
      colors: {
        abletonOrange: "#FF764D",
        abletonBlue: "#0000FF",
        lemonade: "#FBFFA7",
        abletonGray: "#EEEEEE",
        backgroundGray: "#F3F3F3",
        blueArt: "#B1C5FF",
        greenArt: "#B6FFC0",
        purpleArt: "#D5B3FF ",
      },
      spacing: {
        100: "27rem",
        105: "30rem",
      },
      maxHeight: {
        "100em": "100em",
        "80rem": "80rem",
        "50rem": "50rem",
        "50%": "50%",
        "50vh": "50vh",
      },
      height: {
        halfScreen: "50vh",
        100: "48rem",
        lemonadeBox: "58vh",
        "100em": "100em",
        "80rem": "80rem",
        "100rem": "100rem",
        "50rem": "50rem",
        "41rem": "41rem",
        "50%": "50%",
        "50vh": "50vh",
        greenArt12H: "25vw",
        greenArt3H: "41vw",
        greenArtBH: "75vw",
        purpleArt1H: "25vw",
        purpleArt2H: "41vw",
        purpleArtBH: "58vw",
      },
      width: {
        lemonadeBox: "58vh",
        "50vh": "50vh",
        greenArt12W: "33vw",
        greenArt3W: "41vw",
        greenArtBW: "58vw",
        purpleArt1W: "33vw",
        purpleArt2W: "41vw",
        purpleArtBW: "66vw",
      },
      backgroundImage: {
        "purple-img1":
          "url('https://ableton-production.imgix.net/about/photo-7.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
