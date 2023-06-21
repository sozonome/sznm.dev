import type { GetStaticProps } from 'next';

import { sortedProjects } from '~/lib/constants/project';
import { splitProjectByTypes } from '~/lib/utils/projects';

import type { OtherProjectsProps } from './types';

export const getStaticProps: GetStaticProps<OtherProjectsProps> = async () => {
  const otherProjects = sortedProjects.filter(
    (project) => !project.featured && project
  );

  const categorizedProjects = splitProjectByTypes(otherProjects);

  return {
    props: {
      categorizedProjects,
    },
  };
};
