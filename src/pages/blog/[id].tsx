import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { BlogJsonLd, NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { renderers } from "components/blog/renderers";
import Twemoji from "components/Twemoji";
import { baseUrl } from "constants/baseUrl";
import { dateFormatLong } from "helpers/dateFormat";
import { getAllPostIds, getPostData } from "helpers/posts";
import { sznmOgImage } from "helpers/sznmOgImage";
import { BlogPostType } from "models/blog";

import styles from "./[id].module.scss";

type BlogPostProps = {
  postData: BlogPostType;
};

const BlogPost = ({ postData }: BlogPostProps) => {
  const ogImage = sznmOgImage(postData.title);
  const pageUrl = `${baseUrl}/blog/${postData.id}`;

  return (
    <Box>
      <NextSeo
        title={`${postData.title} | sozonome`}
        canonical={pageUrl}
        openGraph={{
          title: `${postData.title} | sozonome`,
          url: pageUrl,
          images: [
            {
              url: ogImage,
              alt: `${postData.title} og-image`,
            },
          ],
        }}
      />

      <BlogJsonLd
        url={`${baseUrl}/blog/${postData.id}`}
        title={`${postData.title} | sozonome`}
        images={[]}
        datePublished={new Date(postData.date).toISOString()}
        dateModified={new Date(postData.date).toISOString()}
        authorName="Agustinus Nathaniel"
        description={`A blog post by Agustinus Nathaniel explaining about ${postData.title}`}
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
        rehypePlugins={[rehypeRaw]}
        components={renderers}
      >
        {postData.rawContent}
      </ReactMarkdown>
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

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const postData = await getPostData(params.id as string);

  return {
    props: { postData },
  };
};

export default BlogPost;
