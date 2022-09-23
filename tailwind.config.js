/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple1: '#1d2142',
        purple2: '#21264f',
        red: '#ff646c',
        cyan: '#01dede',
        pink: '#e77bfa',
        gray1: '#d7e0ff',
        gray2: '#edf1fb',
        dark1: '#171838',
      },
      fontFamily: {
        kumbh: 'Kumbh Sans',
        roboto: 'Roboto Slab',
        space: 'Space Mono',
      },
      spacing: {
        120: '30rem',
      },
    },
  },
  plugins: [],
};
