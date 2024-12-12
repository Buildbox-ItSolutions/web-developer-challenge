import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        verdeE: "#33462E",
        verdeM: "#499B34",
        verdeC: "#32F000",
        rosaE: "#703865",
        rosaM: "#B02C96",
        rosaC: "#F000BE",
        verdeNeon: "#03fc17",
        verdeSE: " #001a00",

        azulE: "#3F3D7A",
        azulM: "#332FBA",
        azulC: "#0800FB",
        amareloE: "#504B35",
        amareloM: "#A59237",
        amareloC: "#FAD000",
        azulNeon: "#34ebe5",
        azulSE: "#000033",
      },
    },
  },
  plugins: [],
};
export default config;
