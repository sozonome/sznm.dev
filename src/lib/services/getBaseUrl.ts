import { cache } from 'react';

import { baseUrl } from '~/lib/constants/baseUrl';

export const getBaseUrl = cache(() =>
  process.env.VERCEL_URL
    ? baseUrl
    : `http://localhost:${process.env.PORT ?? 3000}`
);
