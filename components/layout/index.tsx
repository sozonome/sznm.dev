/**
 * @todo
 * [ ] add floating tab bar component
 */

import { Box } from "@chakra-ui/core";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./meta";
import TabBar from "./TabBar";

type LayoutProps = {
  title?: string;
  children: any;
};

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <Box backgroundColor="blue.50" paddingBottom={160} minHeight="100vh">
      <Box width={["100vw", "100vw", "800px"]} margin="0 auto">
        <Meta title={title} />
        <Header />
        <Box as="main" padding={22}>
          {children}
        </Box>
        <Footer />
        <TabBar />
      </Box>
    </Box>
  );
};

export default Layout;
