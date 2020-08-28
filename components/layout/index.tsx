/**
 * @todo
 * [ ] add floating tab bar component
 */

import { Box, Image } from "@chakra-ui/core";

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
    <Box
      backgroundColor="teal.500"
      color="white"
      paddingBottom={[160, 220]}
      minHeight="100vh"
    >
      <PatternBackground />
      <Box
        width={["100vw", "100vw", "800px"]}
        position="relative"
        zIndex={1}
        margin="0 auto"
      >
        <Meta title={title} />
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

const PatternBackground = () => {
  return (
    <>
      <Image
        src={"/bg.svg"}
        position="fixed"
        right={["-200px", "-200px", "-200px", "0"]}
        alt="background image pattern top right"
      />
      <Image
        src={"/bg.svg"}
        position="fixed"
        left={["-200px", "-200px", "-200px", "0"]}
        bottom="0"
        transform="rotate(180deg)"
        alt="background image pattern bottom left"
      />{" "}
    </>
  );
};

export default Layout;
