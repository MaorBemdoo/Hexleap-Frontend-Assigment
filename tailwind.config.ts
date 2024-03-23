import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': {max: '1535px'},
      xl: {max: '1279px'},
      lg: {max: '1023px'},
      md: {max: '767px'},
      sm: {max: '639px'},
      mobile: {max: '320px'},
    }
  },
  plugins: [require("daisyui")],
};
export default config;
