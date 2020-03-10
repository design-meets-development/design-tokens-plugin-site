module.exports = {
  theme: {
    extend: {
      colors: {
        
      }
    },
    fontFamily: {
     
    },
    textShadow: {
      
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