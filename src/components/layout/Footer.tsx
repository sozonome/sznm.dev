import { Box, Link, Text } from "@chakra-ui/core";

import { responsiveWidthProps } from "../../styles/customTheme";

const Footer = () => {
  return (
    <Box as="footer" {...responsiveWidthProps}>
      <Text fontSize="sm">
        2020 -{" "}
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
