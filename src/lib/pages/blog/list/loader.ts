import fs from "fs";
import type { GetStaticProps } from "next";

import { sortedBlogPosts } from "lib/constants/blog";
import { generateRss } from "lib/utils/generateRss";

import type { BlogPostListProps } from "./types";

export const getStaticProps: GetStaticProps<BlogPostListProps> = async () => {
  const allPostsData = sortedBlogPosts;

  const rss = await generateRss(allPostsData);
  fs.writeFileSync("./public/rss.xml", rss);

  return {
    props: {
      allPostsData,
    },
  };
};
