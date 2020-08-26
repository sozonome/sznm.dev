import { Box, Link } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Box as="footer">
      <Box>
        2020 -{" "}
        <Link
          href="https://agustinusnathaniel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          AgustinusNathaniel
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
