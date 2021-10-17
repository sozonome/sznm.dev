import { Box, Divider, Grid, Link, Stack, Text } from "@chakra-ui/react";

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
    label: "Templates",
    url: "https://github.com/sozonome?tab=repositories&q=template,boilerplate",
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
    <Stack as="footer" width="full" layerStyle="layoutBlock" spacing={6}>
      <Divider />

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
        2020 - {new Date().getFullYear()} |{" "}
        <Link
          href="https://agustinusnathaniel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          AgustinusNathaniel
        </Link>
      </Text>
    </Stack>
  );
};

export default Footer;
