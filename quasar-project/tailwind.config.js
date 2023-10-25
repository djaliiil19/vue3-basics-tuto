/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#002265',
        'primary-200': '#14279B',
        'primary-300': '#608AF5',
        'primary-400': '#082032',
        'primary-900': '#27262C',
        'secondary-900': '#212121',
      }
    },
  },
  plugins: [],
}

