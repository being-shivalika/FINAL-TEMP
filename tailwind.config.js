/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface': '#f7f9fd',
        'surface-container': '#eceef2',
        'primary-neon': '#bff365',
        'structural-dark': '#1e2f00',
        'structural-darker': '#272b2d',
        'brutalist-border': '#75777d',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'brutalist': '4px 4px 0px 0px #1e2f00',
        'brutalist-hover': '6px 6px 0px 0px #1e2f00',
        'brutalist-light': '4px 4px 0px 0px #eceef2',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, #eceef2 1px, transparent 1px), linear-gradient(to bottom, #eceef2 1px, transparent 1px)`,
      }
    },
  },
  plugins: [],
}
