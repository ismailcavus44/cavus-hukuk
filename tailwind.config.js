/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'manrope': ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        'sans': ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 