import { Box, Flex, Heading, Image, Text } from "@chakra-ui/core";

import { getAllPostIds, getPostData } from "../../helpers/posts";
import { dateFormatLong } from "../../helpers/dateFormat";

import { BlogPostType } from "../../models/blog";

import styles from "./[id].module.scss";

type BlogPostProps = {
  postData: BlogPostType;
};

const BlogPost = ({ postData }: BlogPostProps) => {
  return (
    <Box>
      <Flex alignItems="center" marginBottom={8}>
        <Box flexBasis={["80%"]}>
          <Heading size="2xl">{postData.title}</Heading>
          <Text>{dateFormatLong(postData.date)}</Text>
        </Box>
        <Flex flexBasis={["20%"]}>
          <Image src={postData.thumbnail} marginLeft="auto" height="100%" />
        </Flex>
      </Flex>
      <Box
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
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
