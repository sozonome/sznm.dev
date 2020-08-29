/**
 * @todo
 * [ ] add floating tab bar component
 */

import { Box } from "@chakra-ui/core";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./meta";
import TabBar from "./TabBar";
import PatternBackground from "./PatterBackground";

type LayoutProps = {
  title?: string;
  children: any;
};

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <Box
      backgroundColor="teal.500"
      color="white"
      paddingBottom={[160, 220]}
      minHeight="100vh"
    >
      <PatternBackground />
      <Meta />
      <Box
        width={["100vw", "100vw", "800px"]}
        position="relative"
        zIndex={1}
        margin="0 auto"
      >
        <Header />
        <Box as="main" paddingY={22} paddingX={[22, 22, 0]}>
          {children}
        </Box>
        <Footer />
        <TabBar />
      </Box>
    </Box>
  );
};

export default Layout;
