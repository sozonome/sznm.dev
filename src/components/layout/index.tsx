import { Box } from "@chakra-ui/core";

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
  return (
    <Box
      backgroundColor="teal.900"
      color="white"
      paddingBottom={[160, 220]}
      minHeight="100vh"
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
