import { Heading, Box, Text } from "@chakra-ui/core";
import Head from "next/head";
import fs from "fs";

import MotionBox from "../../components/motion/MotionBox";
import BlogPostPreview from "../../components/blog/BlogPostPreview";

import { getSortedPostsData } from "../../helpers/posts";

import { BlogPostType } from "../../models/blog";
import generateRss from "../../helpers/generateRss";

type BlogPostsProps = {
  allPostsData: Array<BlogPostType>;
};

const BlogPosts = ({ allPostsData }: BlogPostsProps) => {
  return (
    <Box>
      <Head>
        <title>Blog Posts | sozonome</title>
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
        {allPostsData
          .filter((post) => post.published === true)
          .map((postData, index) => (
            <BlogPostPreview postData={postData} key={index} />
          ))}
      </MotionBox>
    </Box>
  );
};

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  const rss = await generateRss(allPostsData);
  fs.writeFileSync("./public/rss.xml", rss);

  return {
    props: {
      allPostsData,
    },
  };
};

export default BlogPosts;
