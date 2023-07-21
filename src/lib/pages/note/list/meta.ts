import type { Metadata } from 'next';

import { sznmOgImage } from '~/lib/utils/sznmOgImage';

export const metadata: Metadata = {
  title: 'Notes',
  alternates: {
    canonical: '/notes',
  },
  openGraph: {
    title: 'Notes | sozonome',
    images: {
      url: sznmOgImage({
        heading: 'Notes | sozonome',
        text: 'https://sznm.dev',
      }),
      alt: 'Notes | sozonome og-image',
    },
  },
};
