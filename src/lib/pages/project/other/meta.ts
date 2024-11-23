import type { Metadata } from 'next';

import { sznmOgImage } from '~/lib/utils/sznm-og-image';

export const metadata: Metadata = {
  title: 'Projects - Other',
  alternates: {
    canonical: '/projects/other',
  },
  openGraph: {
    title: 'Other Projects | Agustinus Nathaniel',
    images: {
      url: sznmOgImage({
        heading: 'Other Projects',
        text: 'https://agustinusnathaniel.com',
      }),
      alt: 'Other Projects | Agustinus Nathaniel og-image',
    },
  },
};
