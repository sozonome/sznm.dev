import type { Metadata } from 'next';

import { sznmOgImage } from '~/lib/utils/sznm-og-image';

export const metadata: Metadata = {
  title: 'T.I.L.',
  alternates: {
    canonical: '/til',
  },
  openGraph: {
    title: 'T.I.L. | Agustinus Nathaniel',
    images: {
      url: sznmOgImage({
        heading: 'T.I.L. | Agustinus Nathaniel',
        text: 'https://agustinusnathaniel.com',
      }),
      alt: 'T.I.L. | Agustinus Nathaniel og-image',
    },
  },
};
