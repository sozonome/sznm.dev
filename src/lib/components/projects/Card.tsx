import { Box, Link, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

import type { ProjectType } from "lib/types/project";
import { trackEventToUmami } from "lib/utils/trackEvent";

type CardProps = {
  project: ProjectType;
};

const Card = ({
  project: {
    title,
    icon,
    thumbnail,
    thumbnailDark,
    projectLink,
    playStoreLink,
    repoLink,
  },
}: CardProps) => {
  const dynamicThumbnail = useColorModeValue(
    thumbnail,
    thumbnailDark || thumbnail
  );
  const thumbnailUrl = thumbnail ? dynamicThumbnail : null;

  const overlayBgGradient = useColorModeValue(
    "linear(to-t, rgba(45, 55, 72, 0.6) 0%, rgba(203, 213, 224, 0.4) 80%, rgba(237, 242, 247, 0))",
    "linear(to-t, rgba(0, 0, 0, 0.5) 0%, rgba(237, 242, 247, 0))"
  );

  const link = playStoreLink ?? projectLink ?? repoLink;

  const handleClickProject = () => {
    trackEventToUmami({
      eventValue: `Project Card: open ${title} | ${link}`,
      eventType: "link",
    });
  };

  return (
    <Link
      href={link}
      isExternal
      onClick={handleClickProject}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Box
        borderColor="cardBorder"
        borderWidth={2}
        boxShadow="0px 0px 32px 2px rgba(38, 46, 51, 0.1);"
        borderRadius={20}
        cursor="pointer"
        alignItems="center"
        overflow="hidden"
        justifyContent="center"
        position="relative"
        transition="0.2s ease-out"
        _hover={{
          transform: "translateY(-2px) scale(1.02, 1.02)",
          shadow: "xl",
        }}
      >
        {thumbnailUrl && (
          <Box height={[200, 250, 200]}>
            <Image
              width={200}
              height={200}
              layout="responsive"
              objectFit="cover"
              objectPosition="50% 0"
              src={thumbnailUrl}
              alt={`${title}-thumbnail`}
            />
          </Box>
        )}

        <Stack
          position="absolute"
          justifyContent="flex-end"
          bottom={0}
          padding={6}
          height="full"
          spacing={4}
          zIndex={20}
          width="full"
          bgGradient={overlayBgGradient}
        >
          <Stack direction="row" alignItems="center">
            {icon && <Image src={icon} width={32} height={32} alt={title} />}
            <Text
              fontWeight="bold"
              fontSize="lg"
              fontFamily="Catamaran, sans-serif"
              textShadow="md"
              color="white"
            >
              {title}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default Card;
