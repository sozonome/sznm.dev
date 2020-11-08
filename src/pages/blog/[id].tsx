import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import Image from "next/image";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

import { renderers } from "../../components/blog/renderers";

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
      <Head>
        <title>{postData.title} | sozonome</title>
      </Head>
      <Flex alignItems="center" marginBottom={8}>
        <Box flexBasis={["80%"]}>
          <Heading size="2xl">{postData.title}</Heading>
          <Text>{dateFormatLong(postData.date)}</Text>
        </Box>
        <Flex flexBasis={["20%"]}>
          <Box marginLeft="auto" width="60%">
            <Image src={postData.thumbnail} unsized />
          </Box>
        </Flex>
      </Flex>
      <ReactMarkdown
        className={styles.content}
        children={postData.rawContent}
        renderers={renderers}
        allowDangerousHtml
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
