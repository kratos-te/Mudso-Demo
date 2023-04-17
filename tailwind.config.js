/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'subtitle-back':
          'url("/subtitleBack.svg")',
        'connect-back':
          'url("/subtitleBack2.svg")',
        'connect-back2':'url("/walletBack.svg")'
      },
      colors: {
        blackBack: '#1E1E1E',
        blueDemo: '#00529E',
        oldDemo: 'rgba(0,82,158,0.2)',
        inputBack: 'rgba(35, 52, 71, 0.6)',
        inputPlaceholder: '#858585'
      }
    },
  },
  plugins: [],
}
