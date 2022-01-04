module.exports = {
  prefix: 'x',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      'md': '750px',
      'lg': '990px',
    },
    extend: {
      fontFamily: {
        'heading': 'var(--font-heading-family)'
      },
    },
  },
  plugins: [],
}