import {
  Box,
  Heading,
  Text,
  Flex,
  useColorMode,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import Image from "next/image";

import { ProjectType } from "models/project";

type ProjectDetailWrapperProps = {
  projectData: ProjectType;
};

const ProjectDetailWrapper = ({
  projectData: { title, icon, description, stacks },
}: ProjectDetailWrapperProps) => {
  const { colorMode } = useColorMode();

  const backgroundColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      width="100%"
      height="100%"
      padding={4}
      borderRadius={24}
      backgroundColor={backgroundColor}
    >
      <Flex alignItems="center" width="100%" height="100%" gridGap={4}>
        <Box flexBasis="15%">
          <Flex maxWidth={16} marginX="auto">
            <Image width="100%" height="100%" src={icon} alt={title} />
          </Flex>
        </Box>

        <Grid gap={3} flexBasis="85%">
          <Box>
            <Heading size="md" marginBottom={2}>
              {title}
            </Heading>
            <Text fontSize="sm">{description}</Text>
          </Box>

          {stacks && (
            <Flex marginTop={11} alignItems="center">
              {stacks.map((stack, index) => (
                <Box
                  marginRight={3}
                  key={index}
                  style={{ filter: "drop-shadow(0 0 12px rgb(98, 114, 164))" }}
                >
                  <Image
                    width={25}
                    height={25}
                    src={`/stacks_logo/${colorMode}/${stack}.svg`}
                    alt={stack}
                  />
                </Box>
              ))}
            </Flex>
          )}
        </Grid>
      </Flex>
    </Box>
  );
};

export default ProjectDetailWrapper;
