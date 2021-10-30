import {
  Box,
  Button,
  Grid,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

import ProjectDetailWrapper from "components/projects/detail";
import { baseUrl } from "constants/baseUrl";
import { ProjectType } from "models/project";
import { sznmOgImage } from "utils/sznmOgImage";
import { trackEventToUmami } from "utils/trackEvent";

export type OtherProjectsProps = {
  otherProjects: Array<ProjectType>;
};

const OtherProjects = ({ otherProjects }: OtherProjectsProps) => {
  const buttonColor = useColorModeValue("gray.300", "gray.600");

  const handleBackToFeaturedProjects = () => {
    trackEventToUmami("Other Projects: Back to Featured Projects", "navigate");
  };

  return (
    <>
      <NextSeo
        title="Projects - Other"
        canonical={`${baseUrl}/projects/other`}
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
          onClick={handleBackToFeaturedProjects}
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
        {otherProjects.map((projectData) => (
          <ProjectDetailWrapper
            projectData={projectData}
            source="Other Projects"
            key={projectData.id}
          />
        ))}
      </Grid>
    </>
  );
};

export default OtherProjects;
