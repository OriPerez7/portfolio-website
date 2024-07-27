/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#4169E1",
        secondary: "#20B2AA",
        black: "#151515",
        white: "#ffffff",
        yellow: "#ffc931",
        primaryBg: "#0d0e11",
        textMain: "#f1f5f9",
        textSecondary: "#94a3b8",
        purple: "#B51B75",
        pink: "#B51B75",
        blue: "#3C5B6F",
        darkBlue: "#1D2027",
        gray: "#334155",
        error: "#BF3131",
        success: "#0A6847",
        link: "#1d4ed8",
      },
    },
  },
  plugins: [],
};
