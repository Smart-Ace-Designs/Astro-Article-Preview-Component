/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "theme-very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "theme-desaturated-dark-blue": "hsl(214, 17%, 51%)",
        "theme-grayish-blue": "hsl(212, 23%, 69%)",
        "theme-light-grayish-blue": "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
