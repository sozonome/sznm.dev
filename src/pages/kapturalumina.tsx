import { Box, Heading, Text, Link, Button } from "@chakra-ui/core";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KapturaLumina = () => {
  return (
    <>
      <Box as="article">
        <Image
          src="/app_icons/icon_kapturalumina.png"
          width={110}
          height={110}
          alt="kapturalumina icon"
        />
        <Box marginY={22}>
          <Heading as="h1" size="2xl">
            KapturaLumina
          </Heading>
          <Heading as="h2" size="lg">
            Basic Photography Learning App
          </Heading>
        </Box>
        <Text>
          This is the app I build as part of my bachelor thesis project with
          gamification implementation. The App currently only available in
          Indonesian language.
        </Text>
        <Box marginY={22}>
          <Link
            href="https://kapturalumina.sznm.dev"
            rel="noopener noreferrer"
            marginRight={11}
            isExternal
          >
            <Button>Web App</Button>
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=dev.sznm.kapturalumina"
            rel="noopener noreferrer"
            isExternal
          >
            <Button>
              <FontAwesomeIcon
                icon={["fab", "google-play"]}
                style={{ marginRight: 11 }}
              />
              Play Store
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default KapturaLumina;
