import { Box, Button, Grid, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import type { Project } from 'contentlayer/generated';
import MotionBox from '~/lib/components/motion/MotionBox';
import MotionGrid from '~/lib/components/motion/MotionGrid';
import ProjectDetailWrapper from '~/lib/components/projects/detail';
import {
  childAnimationProps,
  staggerAnimationProps,
} from '~/lib/constants/animation';
import { baseUrl } from '~/lib/constants/baseUrl';
import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking';
import { handleRouteBack } from '~/lib/utils/handleRouteBack';
import { sznmOgImage } from '~/lib/utils/sznmOgImage';
import { trackEvent } from '~/lib/utils/trackEvent';

import type { OtherProjectsProps } from './types';

const renderProjectList = ({
  projects,
  category,
}: {
  projects: Array<Project>;
  category: string;
}) => {
  return (
    <Grid gap={4}>
      <Heading as="h3" size="lg" fontWeight="bold">
        {category}
      </Heading>
      <MotionGrid
        {...staggerAnimationProps}
        gap={8}
        gridTemplateColumns={['repeat(1)', 'repeat(1)', 'repeat(2, 1fr)']}
      >
        {projects.map((projectData) => (
          <MotionBox {...childAnimationProps} key={projectData.id}>
            <ProjectDetailWrapper
              projectData={projectData}
              source="Other Projects"
            />
          </MotionBox>
        ))}
      </MotionGrid>
    </Grid>
  );
};

const OtherProjects = ({ categorizedProjects }: OtherProjectsProps) => {
  const router = useRouter();
  const handleBackToFeaturedProjects = React.useCallback(() => {
    trackEvent({
      eventName: 'Other Projects: Back to Featured Projects',
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
    handleRouteBack({ router, to: '/projects' });
  }, [router]);

  return (
    <>
      <NextSeo
        title="Projects - Other"
        canonical={`${baseUrl}/projects/other`}
        openGraph={{
          title: 'Other Projects | sozonome',
          images: [
            {
              url: sznmOgImage({
                heading: 'Other Projects',
                text: 'https://sznm.dev',
              }),
              alt: 'Other Projects | sozonome og-image',
            },
          ],
        }}
      />

      <Button
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

      <Grid gap={8}>
        {renderProjectList({
          projects: categorizedProjects.libs,
          category: 'Libs',
        })}
        {renderProjectList({
          projects: categorizedProjects.apps,
          category: 'Apps',
        })}
        {renderProjectList({
          projects: categorizedProjects.sites,
          category: 'Sites',
        })}
        {renderProjectList({
          projects: categorizedProjects.templates,
          category: 'Templates',
        })}
        {renderProjectList({
          projects: categorizedProjects.docs,
          category: 'Docs',
        })}
      </Grid>
    </>
  );
};

export default OtherProjects;
