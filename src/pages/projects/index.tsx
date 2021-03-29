import { Heading, Box, Text, Button, Grid } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

import MotionGrid from "../../components/motion/MotionGrid";
import ProjectDetailWrapper from "../../components/projects/ProjectDetailWrapper";

import { getSortedProjectsData } from "../../helpers/projects";

import { ProjectType } from "../../models/project";

type ProjectsProps = {
  allProjectsData: Array<ProjectType>;
};

const Projects = ({ allProjectsData }: ProjectsProps) => {
  const projects = allProjectsData
    .filter(
      (project) => project.featured && project.published !== false && project
    )
    .map((projectData, index) => (
      <ProjectDetailWrapper projectData={projectData} key={index} />
    ));

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

      <MotionGrid
        variants={{
          before: { opacity: 0, y: 20, transition: { type: "spring" } },
          after: { opacity: 1, y: 0, transition: { type: "spring" } },
        }}
        // templateColumns={["repeat(1)", "repeat(1)", "repeat(2,1fr)"]}
        initial="before"
        animate="after"
        gap={8}
        marginBottom={8}
      >
        {/* Highlight */}
        {projects}
      </MotionGrid>

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
