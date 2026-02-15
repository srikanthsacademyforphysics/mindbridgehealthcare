/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#047857',
          dark: '#065f46',
        },
        yellow: {
          DEFAULT: '#FDB813',
          dark: '#f5a500',
        },
        cream: {
          DEFAULT: '#F9F7F4',
        },
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
