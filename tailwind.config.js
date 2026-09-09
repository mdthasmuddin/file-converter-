/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14181D',
        inkSoft: '#1C222A',
        inkLine: '#2A313B',
        paper: '#EDE7DA',
        paperDim: '#E2DBC8',
        paperLine: '#CFC6AE',
        brass: '#C9973E',
        brassDark: '#A97C2E',
        teal: '#3F6E64',
        tealDark: '#2E5049',
        ash: '#8B93A0',
        cream: '#F4F1E8',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
