module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svelte}", "./public/index.html"],
  safelist: {
    standard: [/^w-/, /^bg-[a-z]*-500/],
  },
  darkMode: 'media',
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Avenir", "Helvetica", "Arial", "sans-serif"],
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
