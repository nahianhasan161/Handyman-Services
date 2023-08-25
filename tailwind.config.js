/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        
        'offwhite-50': '#0E172C', /* rgba(14, 23, 44, 0.60); */
        'offwhite-100': '#0e172c80', 
        'offwhite-150': '#E0E0E0', /* rgba(14, 23, 44, 0.60); */
        'offwhite-200': '#E7EC0C', /* rgba(14, 23, 44, 0.60); */
        'offwhite-400': '#0E172C', /* rgba(14, 23, 44, 0.50); */

        
        'orange_500': '#FF6A18',
        'orange_300': '#F8992A',
        'orange_600': '#FF6A184D',
        
        "mud_500":"#7B480A",
        
        "green_500" : "#0BD207",
        "green_400" : "#077F93",
        
        "red_500" : "#FA4017",
        "red_400" : "#FF18E8",
        "red_300" : "#FA4017",
        
        "yallow_200" : "#F1BF0F",
        "yellow_300" : "#F9B50C",

        "black-500" : "#233865",
        
      },
      boxShadow: {
        c_sm: ' 0px 2px 6px 0px rgba(0, 0, 0, 0.25)',
        c_md: " 0px 2px 6px 0px rgba(0, 0, 0, 0.25)",
    },
  }
  },
  plugins: [],
}
