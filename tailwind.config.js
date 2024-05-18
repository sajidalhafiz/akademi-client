/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: '#4D44B5',
      'purple-10': 'rgba(160, 152, 174, 0.20)',
      orange: '#FB7D5B',
      yellow: '#FCC43E',
      text: '#303972',
      green: '#4CBC9A',
      red: '#FF4550',
      background: '#F3F4FF',
      white: '#FFFFFF',
      gray1: '#F5F5F5',
      gray2: '#C1BBEB',
      gray3: '#A098AE',
    },
    fontSize: {
      xs: ['14px'],
      sm: ['18px'],
      lg: ['24px'],
      xl: ['36px'],
      '2xl': ['40px'],
      '3xl': ['48px'],
    },
    fontFamily: {
      poppins: 'poppins, sans-serif'
    }
  },
  plugins: [],
}

