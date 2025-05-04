/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "max-xs": { max: "479px" },
      "max-sm": { max: "767px" },
      "max-md": { max: "1023px" },
      "max-lg": { max: "1279px" },
      "max-xl": { max: "1535px" },
      "max-2xl": { max: "1919px" },
    },
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter-google)",
          {
            fontFeatureSettings: '"cv11"',
            fontVariationSettings: "normal",
          },
        ],
        urban: ["var(--font-urbanist)"],
      },
      animation: {
        border: "border 4s linear infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
    },
  },
  plugins: [],
};
