import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { ProjectDetailWrapper } from '~/lib/pages/project/components/project-detail-wrapper';
import { getProjectBySlug } from '~/lib/services/content/project';

import type { ProjectDetailProps } from './types';

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const projectData = getProjectBySlug(params.id);

  if (!projectData) {
    return notFound();
  }

  return (
    <Box>
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
