import {
  Box,
  Button,
  Grid,
  Heading,
  Link as ChakraLink,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

import ProjectDetailWrapper from "components/projects/ProjectDetailWrapper";

import { getSortedProjectsData } from "helpers/projects";

import { ProjectType } from "models/project";
import { sznmOgImage } from "helpers/sznmOgImage";

type ProjectsProps = {
  allProjectsData: Array<ProjectType>;
};

const Projects = ({ allProjectsData }: ProjectsProps) => {
  const buttonColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Box>
      <NextSeo
        title="Projects - Other"
        openGraph={{
          title: "Projects | sozonome",
          images: [
            {
              url: sznmOgImage("Projects"),
              alt: "Other Projects | sozonome og-image",
            },
          ],
        }}
      />

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
      <Box marginBottom={22}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Other Projects
        </Heading>
      </Box>
      <Grid
        gap={8}
        templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
      >
        {/* Other Projects */}
        {allProjectsData
          .filter(
            (project) =>
              !project.featured && project.published !== false && project
          )
          .map((projectData, index) => {
            if (projectData.projectLink || projectData.repoLink) {
              return (
                <ChakraLink
                  href={projectData.projectLink || projectData.repoLink}
                  isExternal
                  key={projectData.id}
                >
                  <ProjectDetailWrapper projectData={projectData} key={index} />
                </ChakraLink>
              );
            }
            return (
              <ProjectDetailWrapper projectData={projectData} key={index} />
            );
          })}
      </Grid>
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
