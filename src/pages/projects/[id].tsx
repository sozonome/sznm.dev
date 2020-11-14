import { Box, Button } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

import ProjectDetailWrapper from "../../components/projects/ProjectDetailWrapper";

import { getAllProjectIds, getProjectData } from "../../helpers/projects";

import { ProjectType } from "../../models/project";

type ProjectProps = {
  projectData: ProjectType;
};

const Project = ({ projectData }: ProjectProps) => {
  const router = useRouter();

  return (
    <Box>
      <Head>
        <title>{projectData.title} | sozonome</title>
      </Head>
      <Box as="article">
        <Button
          leftIcon={<AiOutlineArrowLeft />}
          size="sm"
          backgroundColor="teal.600"
          marginBottom={22}
          onClick={() => router.push("/projects")}
        >
          projects
        </Button>
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

export const getStaticProps = async ({ params }) => {
  const projectData = await getProjectData(params.id);
  return {
    props: { projectData },
  };
};

export default Project;
