import {
  Box,
  Button,
  Grid,
  Heading,
  Link as ChakraLink,
  Text,
  Tooltip,
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
      </Box>

      <Grid
        gap={6}
        // templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
        marginBottom={8}
      >
        {/* Highlight */}
        {projects}
      </Grid>

      <Grid gap={2} templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}>
        <Link href="/projects/other" passHref>
          <Button variant="outline" isFullWidth>
            Other Projects
          </Button>
        </Link>

        <Tooltip
          label="to view the detailed portfolio page, you must ask for the password through contacting me first, as I build the portfolio page for the one who really have interest to work with me"
          aria-label="portfolio view tooltip"
        >
          <Button
            as="a"
            href="https://prtfl.sznm.dev"
            target="_blank"
            isFullWidth
          >
            see more detailed portfolio
          </Button>
        </Tooltip>
      </Grid>
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
