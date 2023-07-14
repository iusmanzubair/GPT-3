/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Manrope',
      },
      colors: {
        bgColor: '#040C18',
        footerColor: '#031B34',
        blogColor: '#042c54',
        textColor: '#81AFDD',
        subtextColor: '#FF8A71'
      },  
      screen: {
        xmd: '1024px'
      }
    },
  },
  plugins: [],
}