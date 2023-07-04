import { sortedBlogPosts } from '~/lib/constants/blog';
import { generateBlogRss } from '~/lib/utils/generateRss';

export const GET = async () => {
  const allPostsData = sortedBlogPosts;

  const rssFeed = await generateBlogRss(allPostsData);

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
