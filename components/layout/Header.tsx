import Link from "next/link";
import { Box, Text } from "@chakra-ui/core";

const Header = () => {
  return (
    <Box as="header" paddingY={22} paddingX={[22, 0]}>
      <Link href="/">
        <Text as="h1" cursor="pointer" fontSize="3xl">
          sznm.dev
        </Text>
      </Link>
    </Box>
  );
};

export default Header;
