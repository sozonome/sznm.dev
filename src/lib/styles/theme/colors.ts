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
  // https://tailcolor.com/palettes/181f1e
  // colors converter:
  // - https://www.w3schools.com/colors/colors_hexadecimal.asp
  gray: {
    50: '#e8e9e9',
    100: '#d1d2d2',
    200: '#a3a5a5',
    300: '#747978',
    400: '#464c4b',
    500: '#181f1e',
    600: '#131918',
    700: '#0e1312',
    800: '#0a0c0c',
    900: '#050606',
  },
};
