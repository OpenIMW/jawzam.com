const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--inter-font)', ...fontFamily.sans]
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '798px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1440px',
        // => @media (min-width: 1536px) { ... }
      },
      container: {
        center: true
      },
      colors: {
        primary: '#d9b01a', //'#F871A6',
        secondary: '#EAD481',
      }
    },
  },
  plugins: [],
}
