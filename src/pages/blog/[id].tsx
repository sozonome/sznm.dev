import { Box, Heading, Text } from "@chakra-ui/core";

import { getAllPostIds, getPostData } from "../../helpers/posts";
import { dateFormatLong } from "../../helpers/dateFormat";

import { BlogPostType } from "../../models/blog";

type BlogPostProps = {
  postData: BlogPostType;
};

const BlogPost = ({ postData }: BlogPostProps) => {
  return (
    <Box>
      <Heading>{postData.title}</Heading>
      <Text>{dateFormatLong(postData.date)}</Text>
      <Box dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Box>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: { postData },
  };
};

export default BlogPost;
