import {
  Heading,
  Box,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { AiOutlineArrowLeft } from "react-icons/ai";

import ProjectDetailWrapper from "../../components/projects/ProjectDetailWrapper";
import MotionGrid from "../../components/motion/MotionGrid";

import { getSortedProjectsData } from "../../helpers/projects";

import { ProjectType } from "../../models/project";
import Link from "next/link";

type ProjectsProps = {
  allProjectsData: Array<ProjectType>;
};

const Projects = ({ allProjectsData }: ProjectsProps) => {
  const buttonColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Box>
      <Head>
        <title>Projects - Other | sozonome</title>
      </Head>
      <Link href="/projects">
        <Button
          leftIcon={<AiOutlineArrowLeft />}
          size="sm"
          backgroundColor={buttonColor}
          marginBottom={22}
        >
          projects
        </Button>
      </Link>
      <Box marginBottom={22}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Other Projects
        </Heading>
        <Text as="p" size="sm" fontWeight="normal">
          Other projects I worked on previously.
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
