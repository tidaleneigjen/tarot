/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // your existing sans font
      },
      colors: {
        purple: {
          300: '#c4b5fd',
          400: '#a78bfa',
        },
        slate: {
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      backgroundImage: {
        cosmic:
          'linear-gradient(135deg, #0f2027, #203a43, #2c5364, #1c1c2a, #0a0a12)',
        // Replace stops with your preferred dark rainbow colors
      },
    },
  },
  plugins: [],
};
