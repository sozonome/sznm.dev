/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-await-in-loop */
import RSS from "rss";

import { BlogPostType } from "models/blog";

import { getPostData } from "./posts";

const generateRssItem = async (post: BlogPostType) => {
  const postData: any = await getPostData(post.id);

  return {
    title: postData.title,
    id: postData.id,
    date: new Date(postData.date).toUTCString(),
    description: postData.description ? postData.description : "",
    contentHtml: postData.contentHtml,
  };
};

const generateRss = async (posts: Array<BlogPostType>): Promise<string> => {
  const feed = new RSS({
    title: "sozonome's blog",
    site_url: "https://sznm.dev",
    feed_url: "https://sznm.dev/rss.xml",
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const post of posts) {
    if (post.published) {
      const item: any = await generateRssItem(post);
      feed.item({
        title: item.title,
        guid: `https://sznm.dev/blog/${item.id}`,
        url: `https://sznm.dev/blog/${item.id}`,
        date: item.date,
        description: "",
        author: "sozonome",
        custom_elements: [{ "content:encoded": item.contentHtml }],
      });
    }
  }

  return feed.xml({ indent: true });
};

export default generateRss;
