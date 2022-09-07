import type { GetStaticProps } from "next";

import { blogPostIdParams, sortedBlogPosts } from "lib/constants/blog";
import type { BlogPostProps } from "lib/pages/blog/post";

export const getStaticPaths = async () => {
  const paths = blogPostIdParams;
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const postData = sortedBlogPosts.find(
    ({ id }) => id === (params?.id as string)
  );

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { postData },
  };
};
