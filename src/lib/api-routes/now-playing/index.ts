import { defaultHeader } from '~/lib/constants/api/header';
import { fetchNowPlaying } from '~/lib/services/spotify/user/now-playing';

const getNowPlayingAPIRoute = async (req: Request) => {
  if (req.method !== 'GET') {
    return new Response(undefined, { status: 400 });
  }

  try {
    const response = await fetchNowPlaying();

    if (!response?.isPlaying) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: defaultHeader,
      });
    }

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        ...defaultHeader,
        'cache-control': 's-maxage=1, stale-while-revalidate=10',
      },
    });
  } catch {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: defaultHeader,
    });
  }
};

export default getNowPlayingAPIRoute;
