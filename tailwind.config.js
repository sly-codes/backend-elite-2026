/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'notion-bg': '#000000',
        'notion-sidebar': '#191919',
        'notion-border': '#2F2F2F',
        'notion-text': '#FFFFFF',
        'notion-text-secondary': '#9B9B9B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: '14px',
      },
      maxWidth: {
        content: '900px',
      },
    },
  },
  plugins: [],
};
