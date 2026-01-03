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
        'notion-sidebar': '#111111',
        'notion-border': '#222222',
        'notion-text': '#FFFFFF',
        'notion-text-secondary': '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        base: '13px',
        sm: '12px',
      },
      maxWidth: {
        content: '900px',
      },
    },
  },
  plugins: [],
};
