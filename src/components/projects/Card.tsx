import { Box, Text, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import Image from "next/image";
import { ProjectType } from "../../models/project";

import MotionBox from "../motion/MotionBox";

type CardProps = {
  project: ProjectType;
};

const Card = ({
  project: { title, icon, thumbnail, thumbnailDark, projectLink },
}: CardProps) => {
  const backgroundColor = useColorModeValue("gray.200", "gray.600");
  const thumbnailUrl = thumbnail
    ? useColorModeValue(thumbnail, thumbnailDark ? thumbnailDark : thumbnail)
    : null;

  return (
    <Link href={projectLink} isExternal _hover={{ textDecoration: "none" }}>
      <MotionBox
        //chakra props
        backgroundColor={backgroundColor}
        boxShadow="0px 0px 32px 2px rgba(38, 46, 51, 0.1);"
        borderRadius={20}
        cursor={"pointer"}
        alignItems="center"
        overflow="hidden"
        justifyContent="center"
        //motion API
        whileHover={{ scale: 1.05 }}
        variants={{
          before: {
            opacity: 0,
            y: 20,
            transition: {
              type: "spring",
              damping: 16,
              stiffness: 200,
            },
          },
          after: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 16,
              stiffness: 200,
            },
          },
        }}
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
          <Box position="relative" height={200}>
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="50% 0"
              src={thumbnailUrl}
            />
          </Box>
        )}
      </MotionBox>
    </Link>
  );
};

export default Card;
