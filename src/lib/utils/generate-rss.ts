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
    title: "Agustinus Nathaniel's blog",
    site_url: 'https://agustinusnathaniel.com',
    feed_url: 'https://agustinusnathaniel.com/rss.xml',
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const post of posts) {
    if (post.published) {
      const item = await generateRssItem(post);
      feed.item({
        title: item.title,
        guid: `https://agustinusnathaniel.com/blog/${item.slug}`,
        url: `https://agustinusnathaniel.com/blog/${item.slug}`,
        date: item.date,
        description: item.description,
        author: 'Agustinus Nathaniel',
        custom_elements: [{ 'content:encoded': item.contentHtml }],
      });
    }
  }

  return feed.xml({ indent: true });
};
