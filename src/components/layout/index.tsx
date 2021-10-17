import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./meta";
import TabBar from "./TabBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const backgroundColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.900", "gray.200");

  return (
    <Box
      backgroundColor={backgroundColor}
      color={textColor}
      minHeight="100vh"
      paddingBottom={[160, 16]}
      paddingTop={24}
      transition="0.4s ease-out"
    >
      <Meta />
      <Header />
      <Stack
        maxWidth={["100vw", "100vw", "85vw", "800px"]}
        position="relative"
        zIndex={1}
        margin="0 auto"
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
