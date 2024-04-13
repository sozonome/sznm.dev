import type { DeepPartial, Theme } from '@chakra-ui/react';
import {
  Outfit as FontHeading,
  Rethink_Sans as FontBody,
} from 'next/font/google';

const fontHeading = FontHeading({
  subsets: ['latin'],
  variable: '--font-heading',
});

const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const fonts: DeepPartial<Theme['fonts']> = {
  heading: fontHeading.style.fontFamily,
  body: fontBody.style.fontFamily,
};
