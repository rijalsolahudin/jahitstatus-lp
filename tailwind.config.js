/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './assets/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2596be',
          light: '#3bacda',
          dark: '#1a7a9d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // Disable Tailwind's stepped container (max-width == breakpoint). We define
  // a fluid `.container` in style.css instead: full width + a single 1536px cap.
  corePlugins: {
    container: false,
  },
};
