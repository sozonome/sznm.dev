/**
 * @todo
 * [ ] add hero section
 * [ ] add top projects section
 */

import Layout from "../components/layout";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/core";
import Card from "../components/Card";

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
      <Box>
        <Box color="orange.800">
          <Heading>Projects</Heading>
          <Text>Some notable projects I've worked on previously.</Text>
        </Box>
        <Flex wrap="wrap" marginTop={22}>
          <Card
            title="Personal Site"
            img="/avataaars.svg"
            link="/kapturalumina"
          />
          <Card
            title="Personal Site"
            img="/avataaars.svg"
            link="/kapturalumina"
          />
          <Card
            title="Personal Site"
            img="/avataaars.svg"
            link="/kapturalumina"
          />
          <Card
            title="Personal Site"
            img="/avataaars.svg"
            link="/kapturalumina"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
