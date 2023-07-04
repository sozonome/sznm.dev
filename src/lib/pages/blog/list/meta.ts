import type { Metadata } from 'next';

import { sznmOgImage } from '~/lib/utils/sznmOgImage';

export const metadata: Metadata = {
  title: 'Blog Posts',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog Posts | sozonome',
    images: {
      url: sznmOgImage({
        heading: 'Blog Posts | sozonome',
        text: 'https://sznm.dev/blog',
      }),
      alt: 'Blog Posts | sozonome og-image',
    },
  },
};
