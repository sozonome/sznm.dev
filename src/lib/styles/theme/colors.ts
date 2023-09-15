import type { DeepPartial, Theme } from '@chakra-ui/react';

export const colors: DeepPartial<Theme['colors']> = {
  orange: {
    // secondary
    600: '#ba4c00',
    400: '#f47b00',
    200: '#ffac42',

    // tertiary
    900: '#5F4A37',
    700: '#7F6E5F',
    500: '#9F9287',
    300: '#BFB7AF',
  },
  // History:
  // v2: https://tailcolor.com/palettes/181f1e
  // v3: https://palette.saas-ui.dev/ gray #212121
  // colors converter:
  // - https://www.w3schools.com/colors/colors_hexadecimal.asp
  gray: {
    '50': '#f9fafa',
    '100': '#f0f1f3',
    '200': '#e5e8eb',
    '300': '#d0d4da',
    '400': '#a5adb8',
    '500': '#748091',
    '600': '#45566c',
    '700': '#2c3747',
    '800': '#1a202a',
    '900': '#141a21',
  },
};
