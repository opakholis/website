import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [typography]
} satisfies Config;
