import fs from "fs";
import { GetStaticProps } from "next";

import { BlogPostType } from "lib/types/blog";
import { generateRss } from "lib/utils/generateRss";
import { getSortedPostsData } from "lib/utils/posts";

import { BlogPostListProps } from "./types";

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
