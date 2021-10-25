import {
  Box,
  Button,
  Grid,
  Heading,
  Link as ChakraLink,
  Tooltip,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import ProjectDetailWrapper from "components/projects/ProjectDetailWrapper";
import { baseUrl } from "constants/baseUrl";
import { ProjectType } from "models/project";
import { getSortedProjectsData } from "utils/projects";
import { sznmOgImage } from "utils/sznmOgImage";
import { trackEventToUmami } from "utils/trackEvent";

type ProjectsProps = {
  allProjectsData: Array<ProjectType>;
};

const Projects = ({ allProjectsData }: ProjectsProps) => {
  const handleClickProject = (name: string, url: string) => () => {
    trackEventToUmami(`Featured Projects: Open ${name} | ${url}`, "link");
  };

  const projects = allProjectsData
    .filter(
      (project) => project.featured && project.published !== false && project
    )
    .map((projectData) => {
      const link =
        projectData.playStoreLink ??
        projectData.projectLink ??
        projectData.repoLink;

      if (link) {
        return (
          <ChakraLink
            href={link}
            isExternal
            onClick={handleClickProject(projectData.title, link)}
            key={projectData.id}
          >
            <ProjectDetailWrapper projectData={projectData} />
          </ChakraLink>
        );
      }
      return (
        <ProjectDetailWrapper projectData={projectData} key={projectData.id} />
      );
    });

  const handleClickOtherProjects = () => {
    trackEventToUmami("Featured Projects: Click Other Projects", "navigate");
  };

  const handleClickPortfolioPage = () => {
    trackEventToUmami(
      "Featured Projects: Click See More detailed Porfolio",
      "link"
    );
  };

  return (
    <Box>
      <NextSeo
        title="Projects"
        canonical={`${baseUrl}/projects`}
        openGraph={{
          title: "Projects | sozonome",
          images: [
            {
              url: sznmOgImage("Projects"),
              alt: "Projects | sozonome og-image",
            },
          ],
        }}
      />

      <Box marginBottom={8}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Projects
        </Heading>
      </Box>

      <Grid
        gap={6}
        // templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
        marginBottom={8}
      >
        {/* Highlight */}
        {projects}
      </Grid>

      <Grid gap={2} templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}>
        <Link href="/projects/other" passHref>
          <Button
            variant="outline"
            onClick={handleClickOtherProjects}
            isFullWidth
          >
            Other Projects
          </Button>
        </Link>

        <Tooltip
          label="to view the detailed portfolio page, you must ask for the password through contacting me first, as I build the portfolio page for the one who really have interest to work with me"
          aria-label="portfolio view tooltip"
        >
          <Button
            as="a"
            href="https://prtfl.sznm.dev"
            target="_blank"
            isFullWidth
            onClick={handleClickPortfolioPage}
          >
            see more detailed portfolio
          </Button>
        </Tooltip>
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
