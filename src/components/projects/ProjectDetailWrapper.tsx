import React from "react";
import { Box, Image, Heading, Text, Flex, Link, Button } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProjectDetailWrapperProps = {
  projectData: any;
  featured?: boolean;
};

const ProjectDetailWrapper = ({
  projectData,
  featured,
}: ProjectDetailWrapperProps) => {
  return (
    <Box width="100%" marginY={22}>
      <Flex flexWrap={"wrap"} alignItems="center" width="100%">
        <Box alignItems="center" flexBasis={["100%", "20%"]}>
          <Image
            src={projectData.thumbnail}
            width={[55, 88]}
            marginY={22}
            alt={projectData.title}
          />
        </Box>
        <Box flexBasis={["auto", "80%"]} paddingLeft={[0, 22]}>
          {featured && (
            <Text textTransform="uppercase" fontSize="sm" color="orange.200">
              Featured Project
            </Text>
          )}
          <Heading>{projectData.title}</Heading>
          <Text>{projectData.description}</Text>
          <Flex marginY={22} flexWrap="wrap">
            {projectData.projectLink && (
              <Link
                href={projectData.projectLink}
                _hover={{ textDecoration: "none" }}
                marginRight={11}
                marginBottom={11}
                isExternal
              >
                <Button
                  width="100%"
                  backgroundColor="orange.400"
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
            {projectData.playStoreLink && (
              <Link
                href={projectData.playStoreLink}
                _hover={{ textDecoration: "none" }}
                marginRight={11}
                marginBottom={11}
                isExternal
              >
                <Button
                  backgroundColor="teal.300"
                  _hover={{ backgroundColor: "white", color: "black" }}
                  color="black"
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
              <Link
                href={projectData.repoLink}
                _hover={{ textDecoration: "none" }}
                marginBottom={11}
                isExternal
              >
                <Button
                  backgroundColor="teal.700"
                  _hover={{ backgroundColor: "teal.300", color: "black" }}
                >
                  Repo
                </Button>
              </Link>
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectDetailWrapper;
