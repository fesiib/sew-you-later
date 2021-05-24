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
          '18': '4.5rem',
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
      width: ["responsive", "hover", "focus"],
      visibility: ["hover", "focus"],
      extend: {
        backgroundColor: ["active"],
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
  }