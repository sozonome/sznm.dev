import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";

import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      zIndex={5}
      backgroundColor="headerAlphaBackground"
      layerStyle="blur-bg"
      width="full"
    >
      <Flex layerStyle="layoutBlock" alignItems="center">
        <Link href="/" passHref>
          <Text as="a" cursor="pointer" fontSize={["md", "xl"]}>
            sznm.dev
          </Text>
        </Link>

        <Spacer />

        <Flex alignItems="center" gridGap={4}>
          <Flex display={["none", "flex"]}>
            <Navigation />
          </Flex>

          <ThemeToggle />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
