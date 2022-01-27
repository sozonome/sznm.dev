import { Box, Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./meta";
import TabBar from "./TabBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      backgroundColor="background"
      color="text"
      minHeight="100vh"
      paddingBottom={[160, 16]}
      paddingTop={24}
      transition="0.4s ease-out"
    >
      <Meta />
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
