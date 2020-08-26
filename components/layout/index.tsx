/**
 * @todo
 * [ ] add floating tab bar component
 */

import { Box } from "@chakra-ui/core";

import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";

type LayoutProps = {
  title?: string;
  children: any;
};

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <Box backgroundColor="blue.50">
      <Box width={["100%", "800px"]} margin="0 auto">
        <Meta title={title} />
        <Header />
        <Box as="main">{children}</Box>
        <Footer />
        {/* Floating Tab Bar */}
      </Box>
    </Box>
  );
};

export default Layout;
