'use client';

import { Link } from '@chakra-ui/react';
import * as React from 'react';

import { EVENT_TYPE_LINK } from '~/lib/constants/tracking';
import { trackEvent } from '~/lib/utils/trackEvent';

import ProjectDetailContent from './Content';
import type { ProjectDetailWrapperProps } from './types';

const ProjectDetailWrapper = ({
  projectData,
  source,
}: ProjectDetailWrapperProps) => {
  const link =
    projectData.playStoreLink ??
    projectData.projectLink ??
    projectData.repoLink;

  const handleClickProject = React.useCallback(() => {
    trackEvent({
      eventName: `${source}: Open ${projectData.title} | ${link}`,
      eventData: { type: EVENT_TYPE_LINK },
    });
  }, [link, projectData.title, source]);

  if (link) {
    return (
      <Link
        href={link}
        isExternal
        onClick={handleClickProject}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <ProjectDetailContent projectData={projectData} />
      </Link>
    );
  }

  return <ProjectDetailContent projectData={projectData} />;
};

export default ProjectDetailWrapper;
