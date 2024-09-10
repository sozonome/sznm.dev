/* eslint-disable no-await-in-loop */
import RSS from 'rss';

import type { Post } from 'content-collections';
import { getPostBySlug } from '~/lib/services/content/post';

const generateRssItem = (post: Post) => {
  const postData = getPostBySlug(post.id);

  return {
    title: postData.title,
    slug: postData.id,
    date: new Date(postData.date).toUTCString(),
    description: postData.description ? postData.description : '',
    contentHtml: postData.content,
  };
};

export const generateBlogRss = async (posts: Array<Post>): Promise<string> => {
  const feed = new RSS({
    title: "sozonome's blog",
    site_url: 'https://sznm.dev',
    feed_url: 'https://sznm.dev/rss.xml',
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const post of posts) {
    if (post.published) {
      const item = await generateRssItem(post);
      feed.item({
        title: item.title,
        guid: `https://sznm.dev/blog/${item.slug}`,
        url: `https://sznm.dev/blog/${item.slug}`,
        date: item.date,
        description: item.description,
        author: 'sozonome',
        custom_elements: [{ 'content:encoded': item.contentHtml }],
      });
    }
  }

  return feed.xml({ indent: true });
};
