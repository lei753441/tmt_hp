/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink:      "#0A1C3B",
        navy:     "#0B2545",
        midnight: "#060d1c",
        accent:   "#1E5BD6",
        brass:    "#B7A77A",
        paper:    "#F5F6F8",
        line:     "#E5E7EB",
      },
      fontFamily: {
        sans:  ['"Noto Sans JP"', '"Inter"', "system-ui", "sans-serif"],
        serif: ['"Cormorant Garamond"', '"Noto Serif JP"', "serif"],
      },
      letterSpacing: { widest2: ".22em" },
    },
  },
  plugins: [],
};
