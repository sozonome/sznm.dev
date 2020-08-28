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
      <Box as="article">
        <Button
          leftIcon="arrow-back"
          size="sm"
          backgroundColor="teal.300"
          marginBottom={22}
          onClick={() => router.back()}
        >
          back
        </Button>

        <Image
          src={projectData.thumbnail}
          width={88}
          marginY={22}
          alt={projectData.title}
        />
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
                backgroundColor="orange.400"
                fontWeight="semibold"
                _hover={{
                  backgroundColor: "orange.200",
                  color: "black",
                }}
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
              <Button
                backgroundColor="teal.300"
                _hover={{ backgroundColor: "white", color: "black" }}
                color="black"
              >
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
              <Button
                backgroundColor="teal.700"
                _hover={{ backgroundColor: "teal.300", color: "black" }}
              >
                Repo
              </Button>
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
