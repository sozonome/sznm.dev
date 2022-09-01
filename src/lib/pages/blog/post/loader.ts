import type { Blog } from "contentlayer/generated";
import { allBlogs } from "contentlayer/generated";
import type { GetStaticProps } from "next";

import type { BlogPostProps } from "lib/pages/blog/post";

export const getStaticPaths = async () => {
  const paths = allBlogs
    .filter((post) => post.published !== false)
    .map((blog) => ({
      params: {
        id: blog.id,
      },
    }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const postData = allBlogs.find(
    ({ id }) => id === (params?.id as string)
  ) as Blog;

  return {
    props: { postData },
  };
};
