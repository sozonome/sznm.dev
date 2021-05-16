import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

import { renderers } from "components/blog/renderers";
import Twemoji from "components/Twemoji";

import { getAllPostIds, getPostData } from "helpers/posts";
import { dateFormatLong } from "helpers/dateFormat";

import { BlogPostType } from "models/blog";

import styles from "./[id].module.scss";
import SocialMeta from "components/SocialMeta";

type BlogPostProps = {
  postData: BlogPostType;
};

const BlogPost = ({ postData }: BlogPostProps) => {
  const ogImage = `https://og-image.sznm.dev/**${postData.title}**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg`;

  return (
    <Box>
      {console.log({ postData, ogImage })}
      <Head>
        <title>{postData.title} | sozonome</title>
      </Head>
      <SocialMeta
        title={`${postData.title} | sozonome`}
        url={`https://sznm.dev/blog/${postData.id}`}
        image={ogImage}
      />

      <Flex alignItems="center" marginBottom={16}>
        <Box flexBasis={["80%"]}>
          <Heading size="2xl" marginBottom={8}>
            {postData.title}
          </Heading>
          <Link href="/about" isExternal>
            <Text>Agustinus Nathaniel</Text>
          </Link>

          <Text>{dateFormatLong(postData.date)}</Text>
        </Box>

        <Flex flexBasis={["20%"]}>
          <Box marginLeft="auto" width="60%">
            <Twemoji emoji={postData.thumbnail} />
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
