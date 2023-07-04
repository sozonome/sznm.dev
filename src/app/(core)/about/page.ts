import type { Metadata } from 'next';

import About from '~/lib/pages/about';

export const metadata: Metadata = {
  title: 'About',
  openGraph: {
    title: 'About | sozonome',
    description: 'About sznm.dev page',
  },
};

export const dynamic = 'force-static';

export default About;
