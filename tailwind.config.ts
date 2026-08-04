/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FCD34D',   // Or éclatant (lumière)
          DEFAULT: '#E11D48', // Corail vibrant (vie/chaleur)
          dark: '#BE123C',    // Rubis profond (profondeur)
        },
        background: {
          warm: '#FFFDF5',    // Blanc nacré doux
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}