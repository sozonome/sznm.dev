import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MotionBox from "../motion/MotionBox";

import { ProjectType } from "../../models/project";

type ProjectDetailWrapperProps = {
  projectData: ProjectType;
};

const ProjectDetailWrapper = ({
  projectData: {
    title,
    icon,
    description,
    date,
    stacks,
    projectLink,
    playStoreLink,
    repoLink,
  },
}: ProjectDetailWrapperProps) => {
  const { colorMode } = useColorMode();

  const backgroundColor = useColorModeValue("gray.200", "gray.600");

  return (
    <MotionBox
      width="100%"
      padding={4}
      borderRadius={24}
      backgroundColor={backgroundColor}
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
      <Flex wrap="wrap" alignItems="center" width="100%" height="100%">
        <Box
          flexBasis={["100%", "20%", "100%"]}
          alignItems="center"
          height="20%"
        >
          <Box
            marginX={["inherit", "auto", "inherit"]}
            marginBottom={[22, 0, 22]}
            width={[55, 88, 55]}
          >
            <Image width="100%" height="100%" src={icon} alt={title} />
          </Box>
        </Box>
        <Box
          flexBasis={["100%", "80%", "100%"]}
          height={projectLink || playStoreLink || repoLink ? "60%" : "80%"}
        >
          <Heading size="lg" marginBottom={2}>
            {title}
          </Heading>
          <Text>{description}</Text>
          {date && (
            <Text marginY={4} fontSize="xs">
              {new Date(date).getFullYear()}
            </Text>
          )}
          {stacks && (
            <Flex marginTop={11} alignItems="center">
              {stacks.map((stack, index) => (
                <Box
                  marginRight={3}
                  key={index}
                  style={{ filter: "drop-shadow(0 0 12px rgb(98, 114, 164))" }}
                >
                  <Image
                    width={30}
                    height={30}
                    src={`/stacks_logo/${colorMode}/${stack}.svg`}
                  />
                </Box>
              ))}
            </Flex>
          )}
        </Box>
        <Flex marginTop={22} flexWrap="wrap" alignSelf="flex-end">
          {projectLink && (
            <Link href={projectLink} passHref>
              <Button
                backgroundColor={
                  colorMode === "light" ? "orange.200" : "orange.400"
                }
                fontWeight="semibold"
                marginRight={11}
                _hover={{
                  backgroundColor: "orange.200",
                  color: "black",
                }}
              >
                Visit
              </Button>
            </Link>
          )}
          {playStoreLink && (
            <Link href={playStoreLink} passHref>
              <Button
                backgroundColor="gray.300"
                marginRight={11}
                _hover={{ backgroundColor: "white", color: "black" }}
                color={colorMode === "light" ? "inherit" : "gray.600"}
              >
                <FontAwesomeIcon
                  icon={["fab", "google-play"]}
                  style={{ marginRight: 11 }}
                />
                Play Store
              </Button>
            </Link>
          )}
          {repoLink && (
            <Link href={repoLink} passHref>
              <Button
                backgroundColor={
                  colorMode === "light" ? "gray.300" : "gray.600"
                }
                _hover={{ backgroundColor: "gray.300", color: "black" }}
              >
                Repo
              </Button>
            </Link>
          )}
        </Flex>
      </Flex>
    </MotionBox>
  );
};

export default ProjectDetailWrapper;
