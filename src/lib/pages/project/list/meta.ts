import type { Metadata } from 'next';

import { sznmOgImage } from '~/lib/utils/sznmOgImage';

export const metadata: Metadata = {
  title: 'Projects',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | sozonome',
    images: {
      url: sznmOgImage({
        heading: 'Projects | sozonome',
        text: 'https://sznm.dev/projects',
      }),
      alt: 'Projects | sozonome og-image',
    },
  },
};
