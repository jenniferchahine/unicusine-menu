export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [' "Libre Baskerville", serif'],
      },
      colors: {
        primary:'#FF6D3D',
        secondary: '#FFECE3',
        dark:'#222222',
        light:'#F9F9F9',
      },
    },
  },
  plugins: [],
}
