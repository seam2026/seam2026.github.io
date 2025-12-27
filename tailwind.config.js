const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  purge: [
    './pages/*.js',
    './pages/**/*.js',
    './components/*.js',
    './components/**/*.js',
  ],
  theme: {
    boxShadow: {
      DEFAULT: '#11130f 0px 14px 20px;',
    },
    maxWidth: {
      'screen-2xl': '1440px',
      'screen-xl': '1280px',
      'screen-lg': '1024px',
      'screen-md': '768px',
      'screen-sm': '640px',
    },
    extend: {
      colors: {
        'light-bg': '#fff0f5', // Lavender Blush - Light Pink
        'light-surface': '#FFF9C4', // Mimosa/Light Yellow
        'grey-chez': {
          300: '#CBCFCD',
          400: '#9BA19A',
          500: '#8D8B8C',
        },
        brown: {
          500: '#7E7464',
        },
        dark: {
          500: '#0f172a', // Deep Blue/Slate
          450: 'rgba(15, 23, 42, 0.8)',
        },
        'blue-accent': '#38bdf8',
        'yellow-accent': '#facc15',
        'pink-accent': '#f472b6',
        'deep-pink': '#9d174d', // Deep Pink for text
      },
      gridTemplateRows: {
        // Simple 8 row grid

        7: 'repeat(7, minmax(0, 1fr))',
      },
      textShadow: {
        'outline': '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
      },
      height: {
        'screen-plus': 'calc(100vh + 9rem)',
      },
      padding: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      margin: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
