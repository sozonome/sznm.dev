import type { Metadata } from 'next';

import { sznmOgImage } from '~/lib/utils/sznm-og-image';

export const metadata: Metadata = {
  title: 'Blog Posts',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog Posts | Agustinus Nathaniel',
    images: {
      url: sznmOgImage({
        heading: 'Blog Posts | Agustinus Nathaniel',
        text: 'https://agustinusnathaniel.com/blog',
      }),
      alt: 'Blog Posts | Agustinus Nathaniel og-image',
    },
  },
};
