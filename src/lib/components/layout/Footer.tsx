import { Box, Divider, Grid, Link, Stack, Text } from "@chakra-ui/react";

import SpotifyListening from "lib/components/common/SpotifyListening";

type FooterLinkProps = {
  label: string;
  url: string;
};

const links: Array<FooterLinkProps> = [
  {
    label: "Base",
    url: "https://base.sznm.dev",
  },
  {
    label: "Bookmarks",
    url: "https://base.sznm.dev/bookmarks",
  },
  {
    label: "Templates",
    url: "https://github.com/sozonome?tab=repositories&q=starter-template&type=&language=&sort=stargazers",
  },
  {
    label: "Timeline",
    url: "https://poly.sznm.dev",
  },
  {
    label: "Misc",
    url: "https://my-space.sznm.dev",
  },
];

const FooterLink = ({ label, url }: FooterLinkProps) => {
  return (
    <Box>
      <Link href={url} isExternal fontWeight="semibold" fontFamily="heading">
        {label}
      </Link>
    </Box>
  );
};

const Footer = () => {
  return (
    <Stack as="footer" layerStyle="layoutBlock" spacing={8}>
      <Divider />

      <SpotifyListening />

      <Grid
        display={{ base: "grid", md: "flex" }}
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: `repeat(${links.length <= 4 ? links.length : 4}, 1fr)`,
        }}
        gap={{ base: 4, md: 6 }}
      >
        {links.map((link) => (
          <FooterLink {...link} key={link.label} />
        ))}
      </Grid>

      <Text fontSize={["xs", "sm"]}>
        &copy; 2020 - {new Date().getFullYear()}{" "}
        <Link
          href="https://agustinusnathaniel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agustinus Nathaniel
        </Link>
      </Text>
    </Stack>
  );
};

export default Footer;
