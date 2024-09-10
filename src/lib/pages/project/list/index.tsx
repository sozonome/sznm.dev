import { Box, Grid, Heading } from '@chakra-ui/react';

import { MotionBox } from '~/lib/components/motion/motion-box';
import { MotionGrid } from '~/lib/components/motion/motion-grid';
import {
  childAnimationProps,
  staggerAnimationProps,
} from '~/lib/constants/animation';
import { featuredProjects } from '~/lib/constants/project';
import { ProjectDetailWrapper } from '~/lib/pages/project/components/project-detail-wrapper';

import { ProjectListBottomNav } from './bottom-nav';

const ProjectList = () => {
  const featuredProjectCards = featuredProjects.map((projectData) => {
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
      <Box marginBottom={8}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Projects
        </Heading>
      </Box>

      <Grid gap={6} marginBottom={8}>
        <MotionGrid {...staggerAnimationProps} gap={6}>
          {featuredProjectCards}
        </MotionGrid>
      </Grid>

      <ProjectListBottomNav />
    </>
  );
};

export default ProjectList;
