import Layout from "../../components/layout";
import { Heading, Flex } from "@chakra-ui/core";

import { getSortedProjectsData } from "../../lib/projects";
import Card from "../../components/Card";

const Projects = ({ allProjectsData }) => {
  return (
    <Layout>
      <Heading as="h1" fontSize="6xl" color="orange.800">
        Projects
      </Heading>
      <Flex wrap="wrap">
        {allProjectsData.map(({ id, title, thumbnail }, index) => (
          <Card
            title={title}
            route="/projects/[id]"
            link={`/projects/${id}`}
            img={thumbnail}
            key={index}
          />
        ))}
      </Flex>
    </Layout>
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
