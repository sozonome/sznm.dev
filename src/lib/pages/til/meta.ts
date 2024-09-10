import type { Metadata } from 'next';

import { sznmOgImage } from '~/lib/utils/sznm-og-image';

export const metadata: Metadata = {
  title: 'T.I.L.',
  alternates: {
    canonical: '/til',
  },
  openGraph: {
    title: 'T.I.L. | sozonome',
    images: {
      url: sznmOgImage({
        heading: 'T.I.L. | sozonome',
        text: 'https://sznm.dev',
      }),
      alt: 'T.I.L. | sozonome og-image',
    },
  },
};
