import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
