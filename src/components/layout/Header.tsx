import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";

import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

import { responsiveWidthProps } from "../../styles/customTheme";

const Header = () => {
  return (
    <Flex as="header" {...responsiveWidthProps} alignItems="center">
      <Link href="/" passHref>
        <Text as="a" cursor="pointer" fontSize={["lg", "2xl"]}>
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
  );
};

export default Header;
