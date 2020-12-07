import { Box, useColorModeValue } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./meta";
import TabBar from "./TabBar";
import PatternBackground from "./PatternBackground";

import { responsiveWidthProps } from "../../styles/customTheme";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  const backgroundColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.900", "white");

  return (
    <Box
      backgroundColor={backgroundColor}
      color={textColor}
      paddingBottom={[160, 20]}
      minHeight="100vh"
      transition="0.4s ease-out"
    >
      <PatternBackground />
      <Meta />
      <Box
        maxWidth={["100vw", "100vw", "85vw", "800px"]}
        position="relative"
        zIndex={1}
        margin="0 auto"
      >
        <Header />
        <Box as="main" {...responsiveWidthProps}>
          {children}
        </Box>
        <Footer />
        <TabBar />
      </Box>
    </Box>
  );
};

export default Layout;
