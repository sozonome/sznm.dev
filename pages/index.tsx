/**
 * @todo
 * [ ] add hero section
 * [ ] add top projects section
 */

import Layout from "../components/layout";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/core";
import Card from "../components/Card";
import { getSortedProjectsData } from "../lib/projects";
import Link from "next/link";

const Home = ({ allProjectsData }) => {
  return (
    <Layout>
      <HeroSection />
      <ProjectsSection data={allProjectsData} />
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

const ProjectsSection = ({ data }) => {
  return (
    <Box as="section" paddingY={22}>
      <Box>
        <Box color="orange.800">
          <Heading>Projects</Heading>
          <Text>Some notable projects I've worked on previously.</Text>
        </Box>
        <Flex wrap="wrap" marginTop={22}>
          {data
            .filter((project) => project.highlight && project)
            .map(({ id, title }, index) => (
              <Card title={title} link={`/projects/${id}`} key={index} />
            ))}
        </Flex>
      </Box>
    </Box>
  );
};

export const getStaticProps = async () => {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
};

export default Home;
