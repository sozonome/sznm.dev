import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/core";

import Layout from "../components/layout";
import Card from "../components/Card";

import { getSortedProjectsData } from "../lib/projects";

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
    <Flex marginY={44} as="section">
      <Box>
        <Image size={[100, 160]} src="/avataaars.svg" />
      </Box>
      <Box
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
  const router = useRouter();
  useEffect(() => {
    data
      .filter((project) => project.highlight && project)
      .map(({ id }) => {
        router.prefetch("/projects/[id]", `/projects/${id}`);
      });
  });
  return (
    <Box as="section" paddingY={22}>
      <Box>
        <Box color="orange.800">
          <Link href="/projects">
            <Heading as="h1" size="2xl" cursor="pointer">
              Projects
            </Heading>
          </Link>
          <Text>Some notable projects I've worked on previously.</Text>
        </Box>
        <Flex wrap="wrap" marginTop={22}>
          {data
            .filter((project) => project.highlight && project)
            .map(({ id, title, thumbnail }, index) => {
              return (
                <Card
                  title={title}
                  handleClick={() =>
                    router.push("/projects/[id]", `/projects/${id}`)
                  }
                  img={thumbnail}
                  key={index}
                />
              );
            })}
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
