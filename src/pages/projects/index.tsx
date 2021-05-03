import {
  Box,
  Button,
  Grid,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

import ProjectDetailWrapper from "components/projects/ProjectDetailWrapper";

import { getSortedProjectsData } from "helpers/projects";

import { ProjectType } from "models/project";

type ProjectsProps = {
  allProjectsData: Array<ProjectType>;
};

const Projects = ({ allProjectsData }: ProjectsProps) => {
  const projects = allProjectsData
    .filter(
      (project) => project.featured && project.published !== false && project
    )
    .map((projectData, index) => {
      if (
        projectData.playStoreLink ||
        projectData.projectLink ||
        projectData.repoLink
      ) {
        return (
          <ChakraLink
            href={
              projectData.playStoreLink ||
              projectData.projectLink ||
              projectData.repoLink
            }
            isExternal
            key={projectData.id}
          >
            <ProjectDetailWrapper projectData={projectData} key={index} />
          </ChakraLink>
        );
      }
      return <ProjectDetailWrapper projectData={projectData} key={index} />;
    });

  return (
    <Box>
      <Head>
        <title>Projects | sozonome</title>
      </Head>

      <Box marginBottom={8}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Projects
        </Heading>
        <Text as="p" size="sm" fontWeight="normal">
          Some projects I worked on previously.
        </Text>
      </Box>

      <Grid
        gap={6}
        templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
        marginBottom={8}
      >
        {/* Highlight */}
        {projects}
      </Grid>

      <Link href="/projects/other">
        <Button isFullWidth>Other Projects</Button>
      </Link>
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

export default Projects;
