import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: [
    'src/app/layout.tsx',
    'src/middleware.ts',
    'contentlayer.*',
    'vitest.*',
  ],
  project: ['src/**/*.{ts,tsx,js,jsx}'],
};

export default config;
