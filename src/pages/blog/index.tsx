import { Heading, Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import fs from "fs";

import BlogPostPreview from "../../components/blog/BlogPostPreview";

import { getSortedPostsData } from "../../helpers/posts";
import generateRss from "../../helpers/generateRss";

import { BlogPostType } from "../../models/blog";

type BlogPostsProps = {
  allPostsData: Array<BlogPostType>;
};

const BlogPosts = ({ allPostsData }: BlogPostsProps) => {
  const blogPosts = allPostsData
    .filter((post) => post.published === true)
    .map((postData, index) => (
      <BlogPostPreview postData={postData} key={index} />
    ));

  return (
    <Box>
      <Head>
        <title>Blog Posts | sozonome</title>
      </Head>

      <Box marginBottom={22}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Blog Posts
        </Heading>
        <Text>Just some writings</Text>
      </Box>

      <Box>{blogPosts}</Box>
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
