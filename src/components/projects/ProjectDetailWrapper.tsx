import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";

import { ProjectType } from "models/project";

type ProjectDetailWrapperProps = {
  projectData: ProjectType;
};

const ProjectDetailWrapper = ({
  projectData: {
    title,
    icon,
    description,
    stacks,
    projectLink,
    playStoreLink,
    repoLink,
  },
}: ProjectDetailWrapperProps) => {
  const { colorMode } = useColorMode();

  const backgroundColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      width="100%"
      padding={4}
      borderRadius={24}
      backgroundColor={backgroundColor}
    >
      <Flex alignItems="center" width="100%" height="100%" gridGap={4}>
        <Box flexBasis="20%">
          <Flex maxWidth={16} marginX="auto">
            <Image width="100%" height="100%" src={icon} alt={title} />
          </Flex>
        </Box>

        <Grid gap={3} flexBasis="80%">
          <Heading size="lg" marginBottom={2}>
            {title}
          </Heading>
          <Text>{description}</Text>

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
                    alt={stack}
                  />
                </Box>
              ))}
            </Flex>
          )}

          <Flex flexWrap="wrap" gridGap={2}>
            {projectLink && (
              <Link href={projectLink} passHref>
                <Button
                  backgroundColor={
                    colorMode === "light" ? "orange.200" : "orange.400"
                  }
                  fontWeight="semibold"
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
                  _hover={{ backgroundColor: "white", color: "black" }}
                  color={colorMode === "light" ? "inherit" : "gray.600"}
                >
                  <FaGooglePlay /> Play Store
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
        </Grid>
      </Flex>
    </Box>
  );
};

export default ProjectDetailWrapper;
