import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

import ProjectDetailWrapper from "components/projects/detail";
import { baseUrl } from "constants/baseUrl";
import { ProjectType } from "models/project";
import { sznmOgImage } from "utils/sznmOgImage";

export type ProjectDetailParams = {
  id: string;
};

export type ProjectDetailProps = {
  projectData: ProjectType;
};

const ProjectDetail = ({ projectData }: ProjectDetailProps) => {
  const buttonColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Box>
      <NextSeo
        title={projectData.title}
        canonical={`${baseUrl}/projects/${projectData.id}`}
        openGraph={{
          title: `${projectData.title} | sozonome`,
          images: [
            {
              url: sznmOgImage(projectData.title),
              alt: `${projectData.title} | sozonome og-image`,
            },
          ],
        }}
      />

      <Box as="article">
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

        <ProjectDetailWrapper
          source="Project Detail"
          projectData={projectData}
        />
      </Box>
    </Box>
  );
};

export default ProjectDetail;
