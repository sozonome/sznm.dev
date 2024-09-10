'use client';

import { CacheProvider } from '@chakra-ui/next-js';

import { ChakraProvider } from '~/lib/providers/chakra-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
};
