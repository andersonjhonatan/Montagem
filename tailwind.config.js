module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  purge: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
