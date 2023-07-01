'use client';

import { Box, Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

import { useCommandCenter } from '~/lib/components/commands/hook';

const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));
const TabBar = dynamic(() => import('./TabBar'));

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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
        spacing={8}
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

export default Layout;
