import type { Metadata } from 'next';

import { sortedProjects } from '~/lib/constants/project';
import type { ProjectDetailProps } from '~/lib/pages/project/detail/types';
import { sznmOgImage } from '~/lib/utils/sznmOgImage';

export const generateMetadata = ({
  params,
}: ProjectDetailProps): Metadata | undefined => {
  const projectData = sortedProjects.find(
    ({ id }) => id === (params.id as string)
  );

  if (!projectData) {
    return undefined;
  }

  return {
    title: projectData.title,
    alternates: {
      canonical: `/projects/${projectData.id}`,
    },
    openGraph: {
      title: `${projectData.title} | sozonome`,
      images: {
        url: sznmOgImage({
          heading: projectData.title,
          text: 'https://sznm.dev',
        }),
        alt: `${projectData.title} | sozonome og-image`,
      },
    },
  };
};
