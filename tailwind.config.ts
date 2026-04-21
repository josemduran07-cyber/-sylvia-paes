import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8f8f7",
          100: "#efefec",
          200: "#deded7",
          300: "#c9c8be",
          400: "#a9a797",
          500: "#8f8b78",
          600: "#736f60",
          700: "#5b584d",
          800: "#48463f",
          900: "#2d2c29"
        }
      },
      boxShadow: {
        soft: "0 12px 30px rgba(15, 23, 42, 0.08)"
      }
    },
  },
  plugins: [],
};

export default config;
