import Link from "next/link";
import { Box, Text } from "@chakra-ui/core";

import { responsiveWidthProps } from "../../styles/customTheme";

const Header = () => {
  return (
    <Box as="header" {...responsiveWidthProps}>
      <Link href="/" passHref>
        <Text as="a" cursor="pointer" fontSize="3xl">
          sznm.dev
        </Text>
      </Link>
    </Box>
  );
};

export default Header;
