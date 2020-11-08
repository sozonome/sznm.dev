import RSS from "rss";

import { getPostData } from "./posts";

import { BlogPostType } from "../models/blog";

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

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].published !== true) {
      continue;
    } else {
      const item: any = await generateRssItem(posts[i]);
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
