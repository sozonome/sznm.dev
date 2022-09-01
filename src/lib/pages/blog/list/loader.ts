import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import fs from "fs";
import type { GetStaticProps } from "next";

import { generateRss } from "lib/utils/generateRss";

import type { BlogPostListProps } from "./types";

export const getStaticProps: GetStaticProps<BlogPostListProps> = async () => {
  const allPostsData = allBlogs
    .filter((post) => post.published !== false)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  const rss = await generateRss(allPostsData);
  fs.writeFileSync("./public/rss.xml", rss);

  return {
    props: {
      allPostsData,
    },
  };
};
