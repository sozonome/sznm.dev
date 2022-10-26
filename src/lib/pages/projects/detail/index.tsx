import { Box, Button } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

import ProjectDetailWrapper from "lib/components/projects/detail";
import { baseUrl } from "lib/constants/baseUrl";
import { sznmOgImage } from "lib/utils/sznmOgImage";

import type { ProjectDetailProps } from "./types";

const ProjectDetail = ({ projectData }: ProjectDetailProps) => {
  return (
    <Box>
      <NextSeo
        title={projectData.title}
        canonical={`${baseUrl}/projects/${projectData.id}`}
        openGraph={{
          title: `${projectData.title} | sozonome`,
          images: [
            {
              url: sznmOgImage({
                heading: projectData.title,
                text: "https://sznm.dev",
              }),
              alt: `${projectData.title} | sozonome og-image`,
            },
          ],
        }}
      />

      <Box as="article">
        <Button
          as={Link}
          href="/projects"
          leftIcon={<AiOutlineArrowLeft />}
          size="sm"
          backgroundColor="buttonBackground"
          marginBottom={22}
        >
          projects
        </Button>

        <ProjectDetailWrapper
          source="Project Detail"
          projectData={projectData}
        />
      </Box>
    </Box>
  );
};

export default ProjectDetail;
