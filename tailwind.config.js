module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto Slab']
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '16':'4rem',
        '10':'2.5rem'
       },
      maxHeight: {
        'xl': '26.5rem'
       },
      maxWidth: {
        'xl': '47rem'
       },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '16':'4rem',
        '10':'2.5rem'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
