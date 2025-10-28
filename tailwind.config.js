/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        colors: {
          primary: "var(--primary-color)",
          text: "var(--text)",
          grey: "var(--grey)",
          "button-hover": "var(--button-hover)",
        },
        boxShadow: {
          custom: "0 0 16px 0 rgba(0, 0, 0, 0.05)",
        },
        screens: {
          xs: "480px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
          "3xl": "1600px",
          "4xl": "1920px",
          "short-h": { raw: "(max-height: 900px)" },
          "tall-h": { raw: "(min-height: 1200px)" },
        },
      },
    },
    plugins: [],
  }
  
  
