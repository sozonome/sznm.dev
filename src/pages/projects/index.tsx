import { Heading, Box, Text } from "@chakra-ui/react";
import Head from "next/head";

import ProjectDetailWrapper from "../../components/projects/ProjectDetailWrapper";
import MotionGrid from "../../components/motion/MotionGrid";

import { getSortedProjectsData } from "../../helpers/projects";

import { ProjectType } from "../../models/project";

type ProjectsProps = {
  allProjectsData: Array<ProjectType>;
};

const Projects = ({ allProjectsData }: ProjectsProps) => {
  return (
    <Box>
      <Head>
        <title>Projects | sozonome</title>
      </Head>
      <Box marginBottom={22}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Projects
        </Heading>
        <Text as="p" size="sm" fontWeight="normal">
          Some projects I worked on previously.
        </Text>
      </Box>
      <MotionGrid
        variants={{
          before: {},
          after: { transition: { staggerChildren: 0.06 } },
        }}
        templateColumns={["repeat(1)", "repeat(1)", "repeat(2,1fr)"]}
        initial="before"
        animate="after"
        gap={8}
      >
        {/* Highlight */}
        {allProjectsData
          .filter(
            (project) =>
              project.featured && project.published !== false && project
          )
          .map((projectData, index) => (
            <ProjectDetailWrapper projectData={projectData} key={index} />
          ))}

        {/* Other Projects */}
        {allProjectsData
          .filter(
            (project) =>
              !project.featured && project.published !== false && project
          )
          .map((projectData, index) => (
            <ProjectDetailWrapper projectData={projectData} key={index} />
          ))}
      </MotionGrid>
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
