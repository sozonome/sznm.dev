import type { Metadata } from 'next';

import { sortedSnippets } from '~/lib/constants/snippet';
import type { SnippetDetailProps } from '~/lib/pages/snippets/detail/types';
import { sznmOgImage } from '~/lib/utils/sznmOgImage';

export const generateMetadata = ({
  params,
}: SnippetDetailProps): Metadata | undefined => {
  const data = sortedSnippets.find(({ id }) => id === (params?.id as string));

  if (!data) {
    return undefined;
  }

  const ogImage = sznmOgImage({
    heading: data.title,
    text: 'Snippets | https://sznm.dev',
  });

  return {
    title: data.title,
    alternates: {
      canonical: `/snippets/${data.id}`,
    },
    openGraph: {
      title: `sozonome | ${data.title}`,
      images: {
        url: ogImage,
        alt: `${data.title} og-image`,
      },
    },
  };
};
