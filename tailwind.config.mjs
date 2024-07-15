/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "sad-very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "sad-desaturated-dark-blue": "hsl(214, 17%, 51%)",
        "sad-grayish-blue": "hsl(212, 23%, 69%)",
        "sad-light-grayish-blue": "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
