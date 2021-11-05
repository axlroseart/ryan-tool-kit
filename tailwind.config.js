const { generateColors } = require('./tailwindcss/colors');
const { generateFontSize } = require('./tailwindcss/font');
const { generateSpacing } = require('./tailwindcss/spacing');
const { generateRadius } = require('./tailwindcss/radius');
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./packages/**/*.tsx'],
  },
  theme: {
    extend: {
      colors: generateColors(),
      fontSize: generateFontSize(),
      spacing: generateSpacing(),
      borderRadius: generateRadius(),
      boxShadow: {
        sm: '0px 1px 5px 0px rgba(0, 21, 41, 0.11)',
        DEFAULT: '0px 6px 16px 0px rgba(0, 0, 0, 0.08)',
      },
      opacity: {
        '02': '0.02',
        '10': '0.1',
        '15': '0.15',
        '20': '0.2',
        '45': '0.45',
        '65': '0.65',
        '75': '0.75',
        '80': '0.8',
        '85': '0.85',
        '95': '0.95',
      },
      zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '25': 25,
        '30': 30,
        '40': 40,
        '50': 50,
        '75': 75,
        '100': 100,
        '1000': 1000,
        'auto': 'auto',
      },
    },

  },
  variants: {
    extend: {
      display: ['group-hover'],
      borderColor: ['hover'],
      borderWidth: ['hover'],
      borderStyle: ['hover'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
