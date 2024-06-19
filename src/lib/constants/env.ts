import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const requiredString = z.string().min(1);
const requiredUrl = z.string().url();

export const env = createEnv({
  server: {
    SPOTIFY_CLIENT_ID: requiredString,
    SPOTIFY_CLIENT_SECRET: requiredString,
    SPOTIFY_REFRESH_TOKEN: requiredString,
    SHORTENER_HOST_NAME: requiredString,
    PORTFOLIO_ZONE_URL: requiredUrl,
    PORTFOLIO_BUILD_ID: requiredString,
    MM_URL: requiredUrl,
  },
  client: {
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: requiredString,
    NEXT_PUBLIC_UMAMI_SRC: requiredString,
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
    NEXT_PUBLIC_UMAMI_SRC: process.env.NEXT_PUBLIC_UMAMI_SRC,
  },
});
