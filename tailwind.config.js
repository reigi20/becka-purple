module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'becka-purple-darkest' : 'var(--becka-purple-darkest)',
        'becka-neutral' : 'var(--becka-neutral)',
        'becka-purple-dark':'var(--becka-purple-dark)',
        'becka-purple-accent' : 'var(--becka-purple-accent)',
        'becka-purple-light' : 'var(--becka-purple-light)',
      },
      fontFamily : {
        'becka-sans' :  'Playfair Display, serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
