module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      fontFamily: {
        'sans': 'Work Sans, Work Sans, sans-serif',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
  }