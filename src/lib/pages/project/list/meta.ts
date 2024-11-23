import type { Metadata } from 'next';

import { sznmOgImage } from '~/lib/utils/sznm-og-image';

export const metadata: Metadata = {
  title: 'Projects',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | Agustinus Nathaniel',
    images: {
      url: sznmOgImage({
        heading: 'Projects | Agustinus Nathaniel',
        text: 'https://agustinusnathaniel.com/projects',
      }),
      alt: 'Projects | Agustinus Nathaniel og-image',
    },
  },
};
