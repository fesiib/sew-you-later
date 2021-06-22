module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        width: {
          '18': '4.5rem',
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
        margin: {
          '18': '4.5rem',
        }
      },
      fontFamily: {
        'sans': 'Work Sans, Work Sans, sans-serif',
      },
      scale: {
        '200': '2',
        '50': '.5',
        '90': '.9',
      }
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