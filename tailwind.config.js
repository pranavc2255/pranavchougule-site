/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Crimson Pro"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        navy: {
          DEFAULT: '#1a3a5c',
          light:   '#2a5a8c',
          dark:    '#0f2238'
        },
        saffron: {
          DEFAULT: '#E8A020',
          light:   '#F5C050',
          dark:    '#C07810'
        },
        ink: '#1a1a2e',
        mist: '#f4f6f9',
        stone: '#6b7280'
      },
      letterSpacing: {
        widest: '0.2em'
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards'
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
