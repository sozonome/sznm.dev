import { Box, Heading, Text, Link, Button } from "@chakra-ui/react";
import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";

const KapturaLumina = () => {
  return (
    <Box as="article">
      <Box width={110}>
        <Image
          src="/app_icons/icon_kapturalumina.png"
          width={220}
          height={220}
          alt="kapturalumina icon"
        />
      </Box>
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
            <FaGooglePlay />
            Play Store
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default KapturaLumina;
