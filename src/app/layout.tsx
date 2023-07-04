import type { Metadata } from 'next';
import Script from 'next/script';

import Providers from '~/app/providers';
import { baseUrl } from '~/lib/constants/baseUrl';
import { UMAMI_SRC, UMAMI_WEBSITE_ID } from '~/lib/constants/umami';
import Layout from '~/lib/layout';

const creator = 'Agustinus Nathaniel';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    types: {
      'application/rss+xml': `${baseUrl}/rss.xml`,
    },
  },
  applicationName: 'sznm.dev',
  authors: { name: 'sozonome' },
  creator,
  publisher: creator,
  generator: 'Next.js',
  keywords: [
    'sozonome',
    'agustinusnathaniel',
    'Agustinus Nathaniel',
    'sznm',
    'sznm.dev',
  ],
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  icons: {
    icon: '/avataaars.svg',
  },
  appleWebApp: {
    title: 'sznm.dev',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.json',
  title: {
    default: 'Agustinus Nathaniel - Digital Crafter | sozonome',
    template: '%s | sozonome',
  },
  description: "Agustinus Nathaniel's Dev Site | sozonome",
  openGraph: {
    url: 'https://sznm.dev',
    title: 'sozonome | Digital Crafter',
    description: "Agustinus Nathaniel's Dev Site",
    images: [
      {
        url: 'https://og.sznm.dev/api/generate?heading=sozonome&text=https://sznm.dev',
        alt: 'sznm.dev og-image',
      },
    ],
    siteName: 'sozonome',
  },
  twitter: {
    creator: '@sozonome',
    card: 'summary_large_image',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>

        {/* umami self-hosted analytics */}
        <Script
          async
          defer
          data-website-id={UMAMI_WEBSITE_ID}
          src={UMAMI_SRC}
          data-domains="sznm.dev"
        />
      </body>
    </html>
  );
};

export default RootLayout;
