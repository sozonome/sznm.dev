import type { Metadata } from 'next';

import type { ProjectDetailProps } from '~/lib/pages/project/detail/types';
import { getProjectBySlug } from '~/lib/services/content/project';
import { sznmOgImage } from '~/lib/utils/sznmOgImage';

export const generateMetadata = ({
  params,
}: ProjectDetailProps): Metadata | undefined => {
  const projectData = getProjectBySlug(params.id);

  if (!projectData) {
    return undefined;
  }

  return {
    title: projectData.title,
    alternates: {
      canonical: `/projects/${projectData.slug}`,
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
