'use client';

import { Box, Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

import { useCommandCenter } from './components/command-menu/hook';

const Header = dynamic(() =>
  import('./components/header').then((module) => ({ default: module.Header })),
);
const Footer = dynamic(() =>
  import('./components/footer').then((module) => ({ default: module.Footer })),
);
const TabBar = dynamic(() =>
  import('./components/tab-bar').then((module) => ({ default: module.TabBar })),
);

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  useCommandCenter();

  return (
    <Box
      backgroundColor="background"
      color="text"
      minHeight="100vh"
      paddingBottom={[160, 16]}
      paddingTop={24}
      transition="0.4s ease-out"
    >
      <Header />
      <Stack
        direction="column"
        alignItems="center"
        position="relative"
        zIndex={1}
        gap={8}
      >
        <Box as="main" layerStyle="layoutBlock">
          {children}
        </Box>
        <Footer />
      </Stack>
      <TabBar />
    </Box>
  );
};
