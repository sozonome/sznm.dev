import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { AiOutlineArrowLeft } from "react-icons/ai";

import ProjectDetailWrapper from "components/projects/ProjectDetailWrapper";
import { ProjectType } from "models/project";
import { getAllProjectIds, getProjectData } from "utils/projects";

type ProjectProps = {
  projectData: ProjectType;
};

const Project = ({ projectData }: ProjectProps) => {
  const buttonColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Box>
      <Head>
        <title>{projectData.title} | sozonome</title>
      </Head>

      <Box as="article">
        <Link href="/projects" passHref>
          <Button
            leftIcon={<AiOutlineArrowLeft />}
            size="sm"
            backgroundColor={buttonColor}
            marginBottom={22}
          >
            projects
          </Button>
        </Link>
        <ProjectDetailWrapper projectData={projectData} />
      </Box>
    </Box>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = await getProjectData(
    (params as ParsedUrlQuery).id as string
  );
  return {
    props: { projectData },
  };
};

export default Project;
