import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Add custom color shades for dark mode
        darkPrimary: colors.gray[800],
        darkSecondary: colors.gray[700],
        darkTertiary: colors.gray[600],
      },
    },
  },
};
export default config;
