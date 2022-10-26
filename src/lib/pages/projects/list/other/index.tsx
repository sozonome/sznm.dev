import { Box, Button, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

import MotionBox from "lib/components/motion/MotionBox";
import MotionGrid from "lib/components/motion/MotionGrid";
import ProjectDetailWrapper from "lib/components/projects/detail";
import {
  childAnimationProps,
  staggerAnimationProps,
} from "lib/constants/animation";
import { baseUrl } from "lib/constants/baseUrl";
import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { sznmOgImage } from "lib/utils/sznmOgImage";
import { trackEvent } from "lib/utils/trackEvent";

import type { OtherProjectsProps } from "./types";

const OtherProjects = ({ otherProjects }: OtherProjectsProps) => {
  const handleBackToFeaturedProjects = () => {
    trackEvent({
      eventName: "Other Projects: Back to Featured Projects",
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  };

  return (
    <>
      <NextSeo
        title="Projects - Other"
        canonical={`${baseUrl}/projects/other`}
        openGraph={{
          title: "Other Projects | sozonome",
          images: [
            {
              url: sznmOgImage({
                heading: "Other Projects",
                text: "https://sznm.dev",
              }),
              alt: "Other Projects | sozonome og-image",
            },
          ],
        }}
      />

      <Button
        as={Link}
        href="/projects"
        leftIcon={<AiOutlineArrowLeft />}
        size="sm"
        backgroundColor="buttonBackground"
        marginBottom={22}
        onClick={handleBackToFeaturedProjects}
      >
        projects
      </Button>

      <Box marginBottom={22}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Other Projects
        </Heading>
      </Box>

      <MotionGrid
        {...staggerAnimationProps}
        gap={8}
        gridTemplateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
      >
        {otherProjects.map((projectData) => (
          <MotionBox {...childAnimationProps} key={projectData.id}>
            <ProjectDetailWrapper
              projectData={projectData}
              source="Other Projects"
            />
          </MotionBox>
        ))}
      </MotionGrid>
    </>
  );
};

export default OtherProjects;
