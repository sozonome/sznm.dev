import { Box, Link, Text } from "@chakra-ui/react";

import { responsiveWidthProps } from "styles/customTheme";

const Footer = () => {
  return (
    <Box as="footer" width="full" marginBottom={12} {...responsiveWidthProps}>
      <Text fontSize={["xs", "sm"]}>
        2020 - {new Date().getFullYear()} |{" "}
        <Link
          href="https://agustinusnathaniel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          AgustinusNathaniel
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
