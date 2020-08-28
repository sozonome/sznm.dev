import { Box, Link, Text } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Box as="footer" paddingY={22} paddingX={[22, 22, 0]}>
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
