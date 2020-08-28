import { Box, Heading, Text, Flex, Button } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

import Layout from "../../components/layout";

import { getAllProjectIds, getProjectData } from "../../lib/projects";

const Project = ({ projectData }) => {
  return (
    <Layout>
      <Head>
        <title>{projectData.title} - sznm.dev</title>
      </Head>
      <Box as="article">
        <Heading>{projectData.title}</Heading>
        <Text>{projectData.description}</Text>
        <Flex>
          {projectData.projectLink && <Button>Visit</Button>}
          {projectData.playStoreLink && (
            <Button>
              <FontAwesomeIcon icon={["fab", "google-play"]} /> Google Play
            </Button>
          )}
          {projectData.repoLink && <Button>Repo</Button>}
        </Flex>
      </Box>
    </Layout>
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
