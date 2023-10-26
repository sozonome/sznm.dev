import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';

import Providers from '~/app/providers';
import { baseUrl } from '~/lib/constants/baseUrl';
import { env } from '~/lib/constants/env';
import Layout from '~/lib/layout';
import '~/lib/styles/global.css';

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
  icons: {
    icon: '/favicon.ico',
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

export const viewport: Viewport = {
  colorScheme: 'dark light',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <NextTopLoader color="#747978" showSpinner={false} />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>

        {/* umami self-hosted analytics */}
        <Script
          async
          defer
          data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          src={env.NEXT_PUBLIC_UMAMI_SRC}
          data-domains="sznm.dev"
        />
      </body>
    </html>
  );
};

export default RootLayout;
