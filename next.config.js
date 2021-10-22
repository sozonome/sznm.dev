/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    // https://github.com/vercel/next.js/issues/26200#issuecomment-905551440
    nftTracing: true,
  },
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};
