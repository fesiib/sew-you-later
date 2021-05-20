module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        width: {
          '112': '28rem',
          '116': '29rem',
          '120': '30rem',
          '124': '31rem',
          '128': '32rem',
        },
        maxWidth: {
          'xxs': '16rem',
          'xxxs': '12rem',
        },
      },
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