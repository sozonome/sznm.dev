import fs from "fs";
import { GetStaticProps } from "next";

import { BlogPostType } from "models/blog";
import { generateRss } from "utils/generateRss";
import { getSortedPostsData } from "utils/posts";

import { BlogPostListProps } from "./types";

// eslint-disable-next-line import/prefer-default-export
export const getStaticProps: GetStaticProps<BlogPostListProps> = async () => {
  const allPostsData = getSortedPostsData().filter(
    (post: BlogPostType) => post.published === true
  );

  const rss = await generateRss(allPostsData);
  fs.writeFileSync("./public/rss.xml", rss);

  return {
    props: {
      allPostsData,
    },
  };
};
