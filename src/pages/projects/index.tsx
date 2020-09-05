import { Heading, Box } from "@chakra-ui/core";
import Head from "next/head";

import { getSortedProjectsData } from "../../lib/projects";
import ProjectDetailWrapper from "../../components/projects/ProjectDetailWrapper";
import MotionBox from "../../components/motion/MotionBox";

const Projects = ({ allProjectsData }) => {
  return (
    <>
      <Head>
        <title>Projects | sznm.dev</title>
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
        {allProjectsData
          .filter((project) => project.featured && project)
          .map((projectData, index) => (
            <ProjectDetailWrapper projectData={projectData} key={index} />
          ))}
      </MotionBox>
      <Box>
        {allProjectsData
          .filter((project) => !project.featured && project)
          .map((projectData, index) => (
            <ProjectDetailWrapper projectData={projectData} key={index} />
          ))}
      </Box>
    </>
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
