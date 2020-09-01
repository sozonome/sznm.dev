import { Box, Heading, Text, Flex, Button, Link, Image } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

import { getAllProjectIds, getProjectData } from "../../lib/projects";
import { useRouter } from "next/router";
import ProjectDetailWrapper from "../../components/projects/ProjectDetailWrapper";

const Project = ({ projectData }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{projectData.title} | sznm.dev</title>
      </Head>
      <Box as="article">
        <Button
          leftIcon="arrow-back"
          size="sm"
          backgroundColor="teal.300"
          marginBottom={22}
          onClick={() => router.push("/projects")}
        >
          projects
        </Button>
        <ProjectDetailWrapper projectData={projectData} />
      </Box>
    </>
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
