import type { Metadata } from 'next';

import { sznmOgImage } from '~/lib/utils/sznmOgImage';

export const metadata: Metadata = {
  title: 'Snippets',
  alternates: {
    canonical: '/snippets',
  },
  openGraph: {
    title: 'Snippets | sozonome',
    images: {
      url: sznmOgImage({
        heading: 'Snippets | sozonome',
        text: 'https://sznm.dev',
      }),
      alt: 'Snippets | sozonome og-image',
    },
  },
};
