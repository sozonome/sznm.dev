import type { Metadata } from 'next';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';

export const metadata: Metadata = {
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
      </body>
    </html>
  );
};

export default RootLayout;
