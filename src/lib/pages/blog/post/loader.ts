import { GetStaticProps } from "next";

import { BlogPostProps } from "lib/pages/blog/post";
import { getAllPostIds, getPostData } from "lib/utils/posts";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const postData = await getPostData(params?.id as string);

  return {
    props: { postData },
  };
};
