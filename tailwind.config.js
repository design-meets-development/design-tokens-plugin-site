module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF7633',
        'brand-black': '#333333'
      }
    },
    fontFamily: {
      'heading':['Ubuntu', 'sans-serif'],
      'paragraphy': ['Open Sans', 'sans-serif']
    },
    textShadow: {
      'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
      'lg': '0 2px 5px rgba(0, 0, 0, 0.5)',
    },
  },
  variants: {
    textShadow: ['responsive'],
  },
  plugins: [
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true,         // whether to generate ellipsis utilities
      hyphens: true,          // whether to generate hyphenation utilities
      textUnset: true,        // whether to generate utilities to unset text properties
      caps: true,             // whether to generate utilities to use alternate glyphs for capital letters
      nums: true,             // whether to generate utilities to use alternate glyphs for numbers, fractions, and ordinal markers
      ligatures: true,        // whether to generate ligature utilities
      componentPrefix: 'c-',  // the prefix to use for text style classes
    }),
  ]
}