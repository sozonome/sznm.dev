import { getAllProjectIds, getProjectData } from "../../lib/projects";
import { Box, Heading, Text } from "@chakra-ui/core";
import Layout from "../../components/layout";
import Head from "next/head";

const Project = ({ projectData }) => {
  return (
    <Layout>
      <Head>
        <title>{projectData.title} - sznm.dev</title>
      </Head>
      <Box as="article">
        <Heading>{projectData.title}</Heading>
        <Text>{projectData.description}</Text>
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
