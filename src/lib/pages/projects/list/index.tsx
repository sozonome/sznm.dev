import { Box, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import MotionBox from "lib/components/motion/MotionBox";
import MotionGrid from "lib/components/motion/MotionGrid";
import ProjectDetailWrapper from "lib/components/projects/detail";
import { baseUrl } from "lib/constants/baseUrl";
import { sznmOgImage } from "lib/utils/sznmOgImage";

import ProjectListBottomNav from "./BottomNav";
import { childAnimationProps, staggerAnimationProps } from "./constants";
import type { ProjectListProps } from "./types";

const ProjectList = ({ featuredProjects }: ProjectListProps) => {
  const projects = featuredProjects.map((projectData) => {
    return (
      <MotionBox {...childAnimationProps} key={projectData.id}>
        <ProjectDetailWrapper
          projectData={projectData}
          source="Featured Projects"
          key={projectData.id}
        />
      </MotionBox>
    );
  });

  return (
    <>
      <NextSeo
        title="Projects"
        canonical={`${baseUrl}/projects`}
        openGraph={{
          title: "Projects | sozonome",
          images: [
            {
              url: sznmOgImage({
                heading: "Projects",
                text: "https://sznm.dev",
              }),
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

      <MotionGrid {...staggerAnimationProps} gap={6} marginBottom={8}>
        {projects}
      </MotionGrid>

      <ProjectListBottomNav />
    </>
  );
};

export default ProjectList;
