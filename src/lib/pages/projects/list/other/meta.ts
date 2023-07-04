import type { Metadata } from 'next';

import { sznmOgImage } from '~/lib/utils/sznmOgImage';

export const metadata: Metadata = {
  title: 'Projects - Other',
  alternates: {
    canonical: '/projects/other',
  },
  openGraph: {
    title: 'Other Projects | sozonome',
    images: {
      url: sznmOgImage({
        heading: 'Other Projects',
        text: 'https://sznm.dev',
      }),
      alt: 'Other Projects | sozonome og-image',
    },
  },
};
