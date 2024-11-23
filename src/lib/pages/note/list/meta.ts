import type { Metadata } from 'next';

import { sznmOgImage } from '~/lib/utils/sznm-og-image';

export const metadata: Metadata = {
  title: 'Notes',
  alternates: {
    canonical: '/notes',
  },
  openGraph: {
    title: 'Notes | Agustinus Nathaniel',
    images: {
      url: sznmOgImage({
        heading: 'Notes | Agustinus Nathaniel',
        text: 'https://agustinusnathaniel.com',
      }),
      alt: 'Notes | Agustinus Nathaniel og-image',
    },
  },
};
