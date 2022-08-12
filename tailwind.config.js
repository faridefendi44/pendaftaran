/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors:{
        'pink': '#F6DED7',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
