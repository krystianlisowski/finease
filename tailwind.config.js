const colors = require('tailwindcss/colors');

module.exports = { 
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        yellow: colors.amber
      },
      minHeight: {
        '96': '24rem'
      },
      spacing: {
        '50': '12.5rem',
        '18': '4.5rem'
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'roboto-mono': ['Roboto Mono', 'monospace']
    },
  },
  plugins: [],
}