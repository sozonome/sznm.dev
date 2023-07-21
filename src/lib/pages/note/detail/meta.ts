import type { Metadata } from 'next';

import { sortedNotes } from '~/lib/constants/note';
import type { NoteDetailProps } from '~/lib/pages/note/detail/types';
import { sznmOgImage } from '~/lib/utils/sznmOgImage';

export const generateMetadata = ({
  params,
}: NoteDetailProps): Metadata | undefined => {
  const data = sortedNotes.find(({ id }) => id === (params?.id as string));

  if (!data) {
    return undefined;
  }

  const ogImage = sznmOgImage({
    heading: data.title,
    text: 'Notes | https://sznm.dev',
  });

  return {
    title: data.title,
    alternates: {
      canonical: `/notes/${data.id}`,
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
