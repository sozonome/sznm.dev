import fs from "fs";
import { GetStaticProps } from "next";

import BlogPostList, { BlogPostListProps } from "components/pages/blog/list";
import { BlogPostType } from "models/blog";
import { generateRss } from "utils/generateRss";
import { getSortedPostsData } from "utils/posts";

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

export default BlogPostList;
