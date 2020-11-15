import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";

import { responsiveWidthProps } from "../../styles/customTheme";

const Header = () => {
  return (
    <Flex as="header" {...responsiveWidthProps}>
      <Link href="/" passHref>
        <Text as="a" cursor="pointer" fontSize="3xl">
          sznm.dev
        </Text>
      </Link>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
