import { Box, Text, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import Image from "next/image";

import { ProjectType } from "models/project";

type CardProps = {
  project: ProjectType;
};

const Card = ({
  project: { title, icon, thumbnail, thumbnailDark, projectLink },
}: CardProps) => {
  const backgroundColor = useColorModeValue("gray.100", "gray.700");
  const dynamicThumbnail = useColorModeValue(
    thumbnail,
    thumbnailDark || thumbnail
  );
  const thumbnailUrl = thumbnail ? dynamicThumbnail : null;

  return (
    <Link href={projectLink} isExternal _hover={{ textDecoration: "none" }}>
      <Box
        borderColor={backgroundColor}
        borderWidth={2}
        boxShadow="0px 0px 32px 2px rgba(38, 46, 51, 0.1);"
        borderRadius={20}
        cursor="pointer"
        alignItems="center"
        overflow="hidden"
        justifyContent="center"
      >
        <Flex alignItems="center" marginX="auto" width="80%" height={24}>
          <Flex flexBasis={["35%", "30%"]}>
            {icon && <Image src={icon} width={50} height={50} alt={title} />}
          </Flex>
          <Box flexBasis={["65%", "70%"]}>
            <Text
              fontWeight={600}
              fontSize="lg"
              fontFamily="Catamaran, sans-serif"
            >
              {title}
            </Text>
          </Box>
        </Flex>

        {thumbnail && (
          <Box position="relative" height={[200, 250, 200]}>
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
      </Box>
    </Link>
  );
};

export default Card;
