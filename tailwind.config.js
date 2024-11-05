/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bars: "rgba(255, 255, 255, 0.16)",
      links: "rgba(255, 255, 255, 0.64)",
    },
    extend: {
      backgroundImage: {
        "transparent-to-black":
          "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
      },
      fontFamily: {
        custom: ["United Kingdom", "sans-serif"],
        montserrat: ["Montserrat", "United Kingdom"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        normal : 300,
        regular: 400,
        semibold: 600,
        bold: 700,
        light: 300,
      },
      keyframes: {
        "slide-up": {
          "0%": { top: "110%" },
          "100%": { top: "-15.5%" },
        },
        "slide-down": {
          "0%": { top: "-15.5%" },
          "100%": { top: "110%" },
        },
        "heading-up": {
          "0%": { top: "32.5%" },
          "100%": { top: "0" },
        },
        "heading-down": {
          "0%": { top: "0" },
          "100%": { top: "32.5%" },
        },
        "desc-down": {
          "0%": { top: "30%" },
          "100%": { top: "80%" },
        },
        "desc-up": {
          "0%": { top: "80%" },
          "100%": { top: "30%" },
        },
        "btn-down": {
          "0%": { top: "55%" },
          "100%": { top: "95%" },
        },
        "btn-up": {
          "0%": { top: "95%" },
          "100%": { top: "55%" },
        },
        "lg-btn-down": {
          "0%": { top: "76.9%" },
          "100%": { top: "90%" },
        },
        "lg-btn-up": {
          "0%": { top: "90%" },
          "100%": { top: "76.9%" },
        },
        "cus-lg-btn-down": {
          "0%": { top: "70.6%" },
          "100%": { top: "85%" },
        },
        "cus-lg-btn-up": {
          "0%": { top: "85%" },
          "100%": { top: "70.6%" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.5s ease-out forwards",
        "slide-down": "slide-down 0.5s ease-out forwards",
        "heading-up": "heading-up 0.5s ease-out forwards",
        "heading-down": "heading-down 0.5s ease-out forwards",
        "desc-down": "desc-down 0.5s ease-in forwards",
        "desc-up": "desc-up 0.5s ease-in forwards",
        "btn-down": "btn-down 0.5s ease-in forwards",
        "btn-up": "btn-up 0.5s ease-in forwards",
        "lg-btn-up": "lg-btn-up 0.5s ease-in forwards",
        "lg-btn-down": "lg-btn-down 0.5s ease-in forwards",
        "cus-lg-btn-up": "cus-lg-btn-up 0.5s ease-in forwards",
        "cus-lg-btn-down": "cus-lg-btn-down 0.5s ease-in forwards",
      },
    },
  },
  plugins: [],
};
