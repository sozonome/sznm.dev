'use client';

import { ChakraProvider } from '@chakra-ui/react';

import customTheme from '~/lib/styles/theme';

import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={customTheme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
