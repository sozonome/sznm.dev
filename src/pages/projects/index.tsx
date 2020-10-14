import { Heading, Box } from "@chakra-ui/core";
import Head from "next/head";

import ProjectDetailWrapper from "../../components/projects/ProjectDetailWrapper";
import MotionBox from "../../components/motion/MotionBox";

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
        <Heading as="h1" size="2xl">
          Projects
        </Heading>
        <Heading as="p" size="lg" fontWeight="normal">
          Some projects I worked on previously.
        </Heading>
      </Box>
      <MotionBox
        variants={{
          before: {},
          after: { transition: { staggerChildren: 0.06 } },
        }}
        initial="before"
        animate="after"
      >
        {/* Highlight */}
        {allProjectsData
          .filter((project) => project.featured && project)
          .map((projectData, index) => (
            <ProjectDetailWrapper projectData={projectData} key={index} />
          ))}

        {/* Other Projects */}
        {allProjectsData
          .filter((project) => !project.featured && project)
          .map((projectData, index) => (
            <ProjectDetailWrapper projectData={projectData} key={index} />
          ))}
      </MotionBox>
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
