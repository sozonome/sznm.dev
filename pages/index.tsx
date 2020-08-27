/**
 * @todo
 * [ ] add hero section
 * [ ] add top projects section
 */

import Layout from "../components/layout";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/core";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectsSection />
    </Layout>
  );
};

const HeroSection = () => {
  return (
    <Flex as="section">
      <Box>
        <Image size={[100, 160]} src="/avataaars.svg" />
      </Box>
      <Box
        color="blue.900"
        verticalAlign="center"
        width={["100%", "80%", "60%"]}
        paddingX={22}
        alignSelf={["none", "center"]}
      >
        <Heading as="h1" size="2xl" paddingBottom={11}>
          Hello! I'm Nathan,
        </Heading>
        <Text fontSize="xl">
          software engineer specializing in <br /> Frontend and Mobile
          development.
        </Text>
      </Box>
    </Flex>
  );
};

const ProjectsSection = () => {
  return (
    <Box as="section" paddingY={22}>
      <Box color="orange.800">
        <Heading>Projects</Heading>
        <Text>Some notable projects I've worked on previously.</Text>
      </Box>
    </Box>
  );
};

export default Home;
