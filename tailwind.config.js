module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2E5B9A",
          secondary: "#D3262A",
          accent: "#47B50F",
          neutral: "#68696A",
          "base-100": "#FFFFFF",
          info: "#3583C5",
          success: "#35C635",
          warning: "#FFC107",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
