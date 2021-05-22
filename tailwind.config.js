module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        width: {
          '18': '4.5rem',
        }
      },
      fontFamily: {
        'sans': 'Work Sans, Work Sans, sans-serif',
      },
    },
    variants: {
      width: ["responsive", "hover", "focus"],
      visibility: ["hover", "focus"],
      extend: {},
    },
    plugins: [],
  }