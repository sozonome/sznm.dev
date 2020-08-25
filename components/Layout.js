import Head from "next/head";
import Link from "next/link";
import { Box, Heading, Text } from "@chakra-ui/core";

const Layout = ({ title, children }) => {
  return (
    <Box>
      <Head>
        <title>{title ? title : "Hello"} | sznm.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="header">
        <Link href="/">
          <Heading as="h1" fontWeight="light" cursor="pointer">
            sznm.dev
          </Heading>
        </Link>
      </Box>
      <Box as="main">{children}</Box>
      <Box as="footer">
        <Box>
          2020 -{" "}
          <Text
            as="a"
            href="https://agustinusnathaniel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            AgustinusNathaniel
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
