import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';

import { Providers } from '~/app/providers';
import { baseUrl } from '~/lib/constants/base-url';
import { env } from '~/lib/constants/env';
import { Layout } from '~/lib/layout';
import '~/lib/styles/global.css';

const creator = 'Agustinus Nathaniel';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    types: {
      'application/rss+xml': `${baseUrl}/rss.xml`,
    },
  },
  applicationName: 'agustinusnathaniel.com',
  authors: { name: 'Agustinus Nathaniel' },
  creator,
  publisher: creator,
  generator: 'Next.js',
  keywords: [
    'agustinusnathaniel',
    'Agustinus Nathaniel',
    'agustinusnathaniel.com',
  ],
  referrer: 'origin-when-cross-origin',
  appleWebApp: {
    title: 'sznm.dev',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  title: {
    default: 'Agustinus Nathaniel',
    template: '%s | Agustinus Nathaniel',
  },
  description: 'Agustinus Nathaniel site',
  openGraph: {
    url: 'https://agustinusnathaniel.com',
    title: 'Agustinus Nathaniel | Digital Crafter',
    description: 'Agustinus Nathaniel site',
    images: [
      {
        url: 'https://og.sznm.dev/api/generate?heading=Agustinus+Nathaniel&text=https://agustinusnathaniel.com',
        alt: 'agustinusnathaniel.com og-image',
      },
    ],
    siteName: 'agustinusnathaniel',
  },
  twitter: {
    creator: '@agstnsnathaniel',
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#9F9287' },
    { media: '(prefers-color-scheme: dark)', color: '#343335' },
  ],
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
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
