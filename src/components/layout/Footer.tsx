import { Box, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" layerStyle="layoutBlock">
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
