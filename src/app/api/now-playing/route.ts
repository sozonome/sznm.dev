import getNowPlayingAPIRoute from '~/lib/api-routes/now-playing';

export const runtime = 'edge';

export const revalidate = 10;

export const GET = getNowPlayingAPIRoute;
