/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#121417",
        butter: "#f7d86d",
        basil: "#2f7d5b",
        tomato: "#e0563f",
        paper: "#f7f4ec",
        pool: "#1b8ca8"
      },
      boxShadow: {
        panel: "0 18px 60px rgba(18,20,23,.10)",
        insetGlow: "inset 0 1px 0 rgba(255,255,255,.75)"
      }
    }
  },
  plugins: []
};
