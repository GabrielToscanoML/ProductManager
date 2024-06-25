import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#050C9C',
        'brand-secondary': '#3572EF',
        'brand-tertiary': '#3ABEF9',
        'black': '#1C1C1C',
        'gray-20': '#9E9E9E',
        'gray-10': '#DFDFDF',
        'gray-00': '#F0F0F0',
        'white': '#FFFFFF',
      }
    },
  },
  plugins: [],
};
export default config;
