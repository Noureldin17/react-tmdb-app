/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
      colors: {
        // primaryDark:'#08081DFF',
        primaryDark: '#080e12FF',
        secondaryDark: '#131821FF',
        primaryRed: '#5f1916FF',
        // linkPrimary:'#e7fefaFF',
        // linkPrimary:'#bbd2e1FF',
        linkPrimary: '#e6f0ffFF',
        redButtonHover: '#68191dFF',
        primaryBlue: '#369BFF',
        primaryPurple: '#a4a4cc',
        primaryGray: '#6A707C',
        primarySilver: '#8391A1',
        // primaryDarkL1: '#08081DDD',
        // primaryDarkL2: '#08081DA5',
        // primaryDarkL3: '#08081D05',
      },
    },
  },
  plugins: [],
};
