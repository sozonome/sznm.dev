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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    // biome-ignore lint/complexity/noForEach: <explanation>
    data
      .filter((project) => project.highlight && project)
      .forEach(({ slug }) => {
        router.prefetch(`/projects/${slug}`);
      });
  }, [data]);

  const handleClickViewAllProjects = React.useCallback(() => {
    trackEvent({
      eventName: 'Home: View All Projects',
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  }, []);

  return (
    <Stack as="section" spacing={4}>
      <Link href="/projects">
        <Heading size="lg" cursor="pointer">
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
