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
        'offwhite-400': '#0E172C', /* rgba(14, 23, 44, 0.50); */

        'orange_500': '#FF6A18', 
      }
    },
  },
  plugins: [],
}
