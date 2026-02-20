/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        flip: {
          "0%": { transform: "rotateY(90deg)" },
          "100%": { transform: "rotateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        flip: "flip 0.35s ease-out forwards",
      },
      colors: {
        header: "#F47A20",
        toggle: "#FDE0CC",
        cream: "#FAF7F2",
        brand: {
          50: "#FEF6F0",
          100: "#FDECDF",
          200: "#FBC9A8",
          300: "#F9A67A",
          400: "#F47A20",
          500: "#F47A20",
          600: "#E06B15",
          700: "#C25A12",
          800: "#8B4010",
          900: "#5C2B0B",
          950: "#2A1505",
        },
      },
    },
  },
  plugins: [],
};
