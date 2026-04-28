import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F5F2ED',
          300: '#EBE5DA',
        },
        sand: {
          light: '#E6DFD1',
          DEFAULT: '#D2C8B8',
          dark: '#B8AD98',
        },
        mutedBlue: {
          DEFAULT: '#B8C6C8',
          dark: '#8E9D9E',
        },
        // Deepened to a high-contrast rich bronze/ochre
        brandYellow: {
          light: '#D4B872',
          DEFAULT: '#9E7822',
          dark: '#6E5114',
        },
        // Soft pastel accent for primary buttons, hover states, and section backgrounds
        'butter-yellow': '#F7E7A9',
        background: '#FAF8F5',
        foreground: '#1F1E1D',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
