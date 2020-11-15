import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image as ChakraImage,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MotionBox from "../motion/MotionBox";

import { ProjectType } from "../../models/project";

type ProjectDetailWrapperProps = {
  projectData: ProjectType;
};

const ProjectDetailWrapper = ({ projectData }: ProjectDetailWrapperProps) => {
  const { colorMode } = useColorMode();

  return (
    <MotionBox
      width="100%"
      marginY={22}
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
      <Flex flexWrap={"wrap"} alignItems="center" width="100%">
        <Box alignItems="center" flexBasis={["100%", "20%"]}>
          <Box marginY={22} width={[55, 88]}>
            <Image
              width="100%"
              height="100%"
              src={projectData.thumbnail}
              alt={projectData.title}
            />
          </Box>
        </Box>
        <Box flexBasis={["auto", "80%"]} paddingLeft={[0, 22]}>
          {projectData.featured && (
            <Text textTransform="uppercase" fontSize="sm" color="orange.200">
              Featured Project
            </Text>
          )}
          <Heading>{projectData.title}</Heading>
          <Text>{projectData.description}</Text>
          {projectData.stacks && (
            <Flex marginTop={11}>
              {projectData.stacks.map((stack, index) => (
                <Box
                  marginRight={3}
                  key={index}
                  style={{ filter: "drop-shadow(0 0 12px rgb(98, 114, 164))" }}
                >
                  <ChakraImage
                    width={30}
                    height={30}
                    src={`/stacks_logo/${colorMode}/${stack}.svg`}
                  />
                </Box>
              ))}
            </Flex>
          )}
          <Flex marginY={22} flexWrap="wrap">
            {projectData.projectLink && (
              <Link href={projectData.projectLink} passHref>
                <Button
                  backgroundColor={
                    colorMode === "light" ? "orange.200" : "orange.400"
                  }
                  fontWeight="semibold"
                  marginRight={11}
                  marginBottom={11}
                  _hover={{
                    backgroundColor: "orange.200",
                    color: "black",
                  }}
                >
                  Visit
                </Button>
              </Link>
            )}
            {projectData.playStoreLink && (
              <Link href={projectData.playStoreLink} passHref>
                <Button
                  backgroundColor="teal.300"
                  marginRight={11}
                  marginBottom={11}
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
            {projectData.repoLink && (
              <Link href={projectData.repoLink} passHref>
                <Button
                  backgroundColor={
                    colorMode === "light" ? "gray.300" : "teal.700"
                  }
                  marginBottom={11}
                  _hover={{ backgroundColor: "teal.300", color: "black" }}
                >
                  Repo
                </Button>
              </Link>
            )}
          </Flex>
        </Box>
      </Flex>
    </MotionBox>
  );
};

export default ProjectDetailWrapper;
