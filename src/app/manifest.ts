import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  short_name: 'sznm',
  name: 'sznm.dev',
  lang: 'en',
  start_url: '/',
  background_color: '#444444',
  theme_color: '#444444',
  dir: 'ltr',
  display: 'standalone',
  orientation: 'natural',
  prefer_related_applications: false,
  icons: [
    {
      src: '/avataaars.svg',
      purpose: 'any',
      sizes: '48x48 72x72 96x96 128x128 256x256',
    },
  ],
});

export default manifest;
