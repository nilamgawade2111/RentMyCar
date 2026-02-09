module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#a0c4ff',
        'soft-pink': '#ffafcc',
        'soft-green': '#caffbf',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary-gradient': ['#a0c4ff', '#ffafcc'],
      }),
    },
  },
  plugins: [],
};