const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { withContentlayer } = require('next-contentlayer');

/**
 * @docs
 * - https://scotthelme.co.uk/content-security-policy-an-introduction/
 * - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
 */
const ContentSecurityPolicy = `
  default-src 'self' *.sznm.dev;
  script-src 'self' 'unsafe-inline' 'unsafe-eval' umami.sznm.dev cdn.vercel-insights.com vercel.live *.sznm.dev;
  frame-src giscus.app vercel.live;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/ *.sznm.dev;
  img-src * blob: data: *.freepik.com;
  media-src 'none';
  connect-src *;
  font-src 'self' https://fonts.gstatic.com/ *.sznm.dev;
`;

/**
 * @docs
 * - https://nextjs.org/docs/advanced-features/security-headers
 */
const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'geolocation=()',
  },
];

const portfolioZoneUrl = process.env.PORTFOLIO_ZONE_URL ?? '';
const portfolioDataPrefix = `/_next/data/${process.env.PORTFOLIO_BUILD_ID}`;

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
  withContentlayer({
    reactStrictMode: true,
    headers: async () => {
      return [
        {
          source: '/',
          headers: securityHeaders,
        },
        {
          source: '/:path*',
          headers: securityHeaders,
        },
      ];
    },
    eslint: {
      dirs: ['src'],
    },
    transpilePackages: ['lodash-es'],
    experimental: {
      scrollRestoration: true,
    },
    redirects: () => {
      return [
        {
          source: '/snippets/:id',
          destination: '/notes/:id',
          permanent: false,
        },
      ];
    },
    rewrites: () => ({
      beforeFiles: [
        {
          source: '/portfolio',
          destination: `${portfolioZoneUrl}/portfolio`,
        },
        {
          source: '/portfolio/:path*',
          destination: `${portfolioZoneUrl}/portfolio/:path*`,
        },
        {
          source: `${portfolioDataPrefix}/portfolio.json`,
          destination: `${portfolioZoneUrl}${portfolioDataPrefix}/portfolio.json`,
        },
        {
          source: `${portfolioDataPrefix}/portfolio/:path*`,
          destination: `${portfolioZoneUrl}${portfolioDataPrefix}/portfolio/:path*`,
        },
        {
          source: '/api/portfolio/:path*',
          destination: `${portfolioZoneUrl}/api/portfolio/:path*`,
        },
        {
          source: '/assets/portfolio/:path*',
          destination: `${portfolioZoneUrl}/assets/portfolio/:path*`,
        },
      ],
    }),
  })
);
