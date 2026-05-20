import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '900px',
      xl: '1100px',
      '2xl': '1260px',
    },
    extend: {
      colors: {
        navy:          '#091B3D',
        navy2:         '#0D2456',
        navy3:         '#122E70',
        cyan:          '#1A52C8',
        'cyan-dark':   '#1242A8',
        amber:         '#E8610A',
        'amber-dark':  '#C84E06',
        bg:            '#F5F7FA',
        'bg-alt':      '#FFFFFF',
        border:        '#DCE4EE',
        text:          '#181F2E',
        'text-light':  '#4A5C75',
        'text-muted':  '#7A8BA2',
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
      },
      maxWidth: {
        page: '1260px',
      },
    },
  },
  plugins: [],
}

export default config
