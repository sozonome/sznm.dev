import { getAllPosts } from '~/lib/services/content/post';
import { generateBlogRss } from '~/lib/utils/generateRss';

export const GET = async () => {
  const rssFeed = await generateBlogRss(getAllPosts());

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
