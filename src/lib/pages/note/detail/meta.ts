import type { Metadata } from 'next';

import type { NoteDetailProps } from '~/lib/pages/note/detail/types';
import { getNoteBySlug } from '~/lib/services/content/note';
import { sznmOgImage } from '~/lib/utils/sznm-og-image';

export const generateMetadata = ({
  params,
}: NoteDetailProps): Metadata | undefined => {
  const data = getNoteBySlug(params?.id);

  if (!data) {
    return undefined;
  }

  const ogImage = sznmOgImage({
    heading: data.title,
    text: 'Notes | https://agustinusnathaniel.com',
  });

  return {
    title: data.title,
    alternates: {
      canonical: `/notes/${data.id}`,
    },
    openGraph: {
      title: `Agustinus Nathaniel | ${data.title}`,
      images: {
        url: ogImage,
        alt: `${data.title} og-image`,
      },
    },
  };
};
