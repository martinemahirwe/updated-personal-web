/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', //or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#1c0849',
        backgroundColor: '#0b001a',
        purplev2:"#18092f"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

