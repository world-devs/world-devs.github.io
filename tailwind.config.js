/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "patchnotes.html"],
  theme: {
    extend: {},
    screens: {
      xxsm: "280px",
      xm: "320px",
      sm: "640px",
      md: "768px",
      md2: "800px",
      md4: "900px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1536px",
    }
  },
  plugins: [],
}
