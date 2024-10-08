'use client';

import { Box, Button, Grid, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import type { Project } from 'content-collections';
import { MotionBox } from '~/lib/components/motion/motion-box';
import { MotionGrid } from '~/lib/components/motion/motion-grid';
import {
  childAnimationProps,
  staggerAnimationProps,
} from '~/lib/constants/animation';
import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking';
import { ProjectDetailWrapper } from '~/lib/pages/project/components/project-detail-wrapper';
import { handleRouteBack } from '~/lib/utils/handle-route-back';
import type { splitProjectByTypes } from '~/lib/utils/projects';
import { trackEvent } from '~/lib/utils/track-event';

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

type OtherProjectsProps = {
  categorizedProjects: ReturnType<typeof splitProjectByTypes>;
};

export const OtherProjects = ({ categorizedProjects }: OtherProjectsProps) => {
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
