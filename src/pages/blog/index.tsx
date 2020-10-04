import { Heading, Box, Text } from "@chakra-ui/core";
import Head from "next/head";

import MotionBox from "../../components/motion/MotionBox";
import BlogPostPreview from "../../components/blog/BlogPostPreview";

import { getSortedPostsData } from "../../helpers/posts";

import { BlogPostType } from "../../models/blog";

type BlogPostsProps = {
  allPostsData: Array<BlogPostType>;
};

const BlogPosts = ({ allPostsData }: BlogPostsProps) => {
  return (
    <>
      <Head>
        <title>Blog Posts | sznm.dev</title>
      </Head>
      <Box marginBottom={22}>
        <Heading as="h1" size="2xl">
          Blog Posts
        </Heading>
        <Text>Just some writings</Text>
      </Box>
      <MotionBox
        variants={{
          before: {},
          after: { transition: { staggerChildren: 0.06 } },
        }}
        initial="before"
        animate="after"
      >
        {allPostsData.map((postData, index) => (
          <BlogPostPreview postData={postData} key={index} />
        ))}
      </MotionBox>
    </>
  );
};

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default BlogPosts;
