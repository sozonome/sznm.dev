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
  // https://tailcolor.com/palettes/414042
  // colors converter:
  // - https://www.w3schools.com/colors/colors_hexadecimal.asp
  gray: {
    '50': '#ececec',
    '100': '#d9d9d9',
    '200': '#b3b3b3',
    '300': '#8d8c8e',
    '400': '#676668',
    '500': '#414042',
    '600': '#343335',
    '700': '#272628',
    '800': '#1a1a1a',
    '900': '#0d0d0d',
  },
};
