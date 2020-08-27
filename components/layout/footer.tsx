import { Box, Link, Text } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Box as="footer" padding={22}>
      <Text color="blue.900" fontSize="sm">
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
