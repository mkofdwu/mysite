/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#64a577',
        white: '#f2f2f2',
        black: '#1e1e1e'
      }
    },
    transitionDuration: {
      DEFAULT: '200ms'
    }
  },
  plugins: []
}
