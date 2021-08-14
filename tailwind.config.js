const colors = require('tailwindcss/colors');

const GRAY = colors.gray[300];

const OUTLINE = {
  border: `1px solid ${GRAY}`,
};

const COLORS = {
  gray: GRAY,
};

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: OUTLINE,
      colors: COLORS,
    },
  },
  variants: {
    extend: {
      outline: ['hover', 'active'],
    },
  },
  plugins: [],
};
