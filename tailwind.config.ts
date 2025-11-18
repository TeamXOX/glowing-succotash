import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#991b1b',
        secondary: '#7f1d1d',
        accent: '#dc2626',
        dark: {
          bg: '#0a0e27',
          card: '#1a1f3a',
          border: '#2a3050',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        'gradient-red': 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)',
      },
    },
  },
  plugins: [],
}
export default config
