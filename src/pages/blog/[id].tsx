import { GetStaticProps } from "next";

import BlogPost, { BlogPostProps } from "components/pages/blog/post";
import { getAllPostIds, getPostData } from "utils/posts";

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

export default BlogPost;
