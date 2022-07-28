/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color': 'hsl(220,98%,61%)',
        "gradient-color-one": "hsl(192,100%,67%)",
      "gradient-color-two":"hsl(280,87%,65%)",
      //lighttheme
      "light-gray":"hsl(0,0%,98%)",
      "light-bluish":"hsl(236,33%,92%)",
      "light-gray":"hsl(236,33%,92%)",
      "dark-grayish-blue":"hsl(236,9%,61%)",
      "very-dark-grayish-blue":"hsl(235,19%,35%)",
      //darktheme
      "dark-blue":"hsl(235,21%,11%)",
      "dark-desaturated-blue":"hsl(235,24%,19%)",
      "light-grayish-blue":"hsl(234,39%,85%)",
      "light-grayish-blue-hover":"hsl(236,33%,92%)",
      "dark--theme--dark-grayish-blue":"hsl(234,11%,52%)",
      "dark-theme-very-dark-grayish-blue":"hsl(233,14%,35%)",
      "dark-theme-very-dark-grayish-blue2":"hsl(237,14%,26%)",
      },
      container: {
        center: true,
        padding: "1.5625rem"
      },
    },
  },
  plugins: [],
};
