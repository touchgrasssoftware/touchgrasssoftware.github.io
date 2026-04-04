import {presetWind3} from '@unocss/preset-wind3'
import {defineConfig, presetIcons, presetWebFonts} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({
      collections: {
        // iconify collections are auto-loaded via @iconify-json deps
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        mono: 'Sono:400,500,600,700',
      },
    }),
  ],
  theme: {
    colors: {
      // green palette
      primary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
      secondary: {
        50: '#ffe0bd',
        100: '#ffcd94',
        200: '#e0ac69',
        300: '#d19a66',
        400: '#c68642',
        500: '#8a5524',
        600: '#5c4033',
        700: '#4b3a2c',
        800: '#3b2f2f',
        900: '#2c1b0a',
      },
    },
  },
})
