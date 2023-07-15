/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit", // just in time compiler faster build times ## maybe bug crash fix
  content: [
    "./src/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    colors: {
      primary: "#242734",
      secondary: "#1E212E80",
      accent: "#FF4A57",
      text: "#EDEDED",
      detail: "#EFEDFDB5",
      header: "#EDEDED",

      transparent: "transparent",

      red: "#FF0000",
      green: "#00FF00",
      blue: "#0000FF",
    },
    screens: {
      sm: '640px',
      md: '768px',
      mdlg: '850px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      base: "1rem",

      detail: "20px",
      aroundXl: "38px",
      xl: "60px",

      fontHeader: "20px",
      fontHeaderLogo: "32px",

      arrow: "45px",

      link: "30px",
    },
    extend: {
      padding: {
        spacing: "10%",
      },
      margin: {
        spacing: "10%",
      },
      backgroundImage: {
        blur: "url('../img/background-blur.svg')",
      },
      blur: {
        background: "200px",
      },
    },
  },
  plugins: [],
};
