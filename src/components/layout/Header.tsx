import Link from "next/link";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";

import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

import { responsiveWidthProps } from "styles/customTheme";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      top={0}
      zIndex={5}
      backgroundColor={
        colorMode === "light"
          ? "rgba(247, 250, 252, 0.8)"
          : "rgba(26, 32, 44, 0.8)"
      }
      style={{ backdropFilter: "blur(6px)" }}
      width="full"
    >
      <Flex
        marginX="auto"
        maxWidth="800px"
        as="header"
        {...responsiveWidthProps}
        alignItems="center"
      >
        <Link href="/" passHref>
          <Text as="a" cursor="pointer" fontSize={["md", "xl"]}>
            sznm.dev
          </Text>
        </Link>

        <Flex marginLeft="auto" alignItems="center">
          <Flex width="10rem" display={["none", "flex"]}>
            <Navigation />
          </Flex>

          <ThemeToggle />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
