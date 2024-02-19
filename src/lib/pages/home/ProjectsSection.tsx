'use client';

import { Box, Button, Grid, Heading, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Card from '~/lib/components/projects/Card';
import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking';
import type { Project } from '~/lib/types/project';
import { trackEvent } from '~/lib/utils/trackEvent';

type ProjectsSectionProps = { data: Array<Project> };

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const router = useRouter();

  React.useEffect(() => {
    data
      .filter((project) => project.highlight && project)
      .forEach(({ slug }) => {
        router.prefetch(`/projects/${slug}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleClickViewAllProjects = React.useCallback(() => {
    trackEvent({
      eventName: 'Home: View All Projects',
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  }, []);

  return (
    <Stack as="section" marginBottom={16} spacing={4}>
      <Link href="/projects">
        <Heading size="lg" cursor="pointer" marginBottom={2}>
          Projects
        </Heading>
      </Link>

      <Grid
        gap={8}
        templateColumns={['repeat(1)', 'repeat(1)', 'repeat(2, 1fr)']}
        marginY={8}
      >
        {data.map((project) => (
          <Card project={project} key={project.slug} />
        ))}
      </Grid>

      <Box>
        <Button
          as={Link}
          href="/projects"
          rightIcon={<FaArrowRight />}
          size="lg"
          variant="outline"
          fontFamily="heading"
          onClick={handleClickViewAllProjects}
        >
          view all projects
        </Button>
      </Box>
    </Stack>
  );
};

export default ProjectsSection;
