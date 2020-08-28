import { Box, Heading, Text, Flex, Button, Link, Image } from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

import Layout from "../../components/layout";

import { getAllProjectIds, getProjectData } from "../../lib/projects";
import { useRouter } from "next/router";

const Project = ({ projectData }) => {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>{projectData.title} - sznm.dev</title>
      </Head>
      <Box as="article" color="orange.900">
        <Button
          leftIcon="arrow-back"
          size="sm"
          backgroundColor="orange.300"
          marginBottom={22}
          onClick={() => router.push("/projects")}
        >
          back
        </Button>

        <Image src={projectData.thumbnail} width={88} marginY={22} />
        <Heading>{projectData.title}</Heading>
        <Text>{projectData.description}</Text>

        <Flex marginY={22}>
          {projectData.projectLink && (
            <Link
              href={projectData.projectLink}
              _hover={{ textDecoration: "none" }}
              marginRight={11}
              isExternal
            >
              <Button
                width="100%"
                backgroundColor="orange.800"
                fontWeight="semibold"
              >
                Visit
              </Button>
            </Link>
          )}
          {projectData.playStoreLink && (
            <Link
              href={projectData.playStoreLink}
              _hover={{ textDecoration: "none" }}
              marginRight={11}
              isExternal
            >
              <Button backgroundColor="orange.300">
                <FontAwesomeIcon
                  icon={["fab", "google-play"]}
                  style={{ marginRight: 11 }}
                />
                Play Store
              </Button>
            </Link>
          )}
          {projectData.repoLink && (
            <Link
              href={projectData.repoLink}
              _hover={{ textDecoration: "none" }}
              isExternal
            >
              <Button>Repo</Button>
            </Link>
          )}
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
