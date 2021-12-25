import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import BlogPostPreview from "components/blog/BlogPostPreview";
import { baseUrl } from "constants/baseUrl";
import { sznmOgImage } from "utils/sznmOgImage";

import { BlogPostListProps } from "./types";

const BlogPostList = ({ allPostsData }: BlogPostListProps) => {
  const blogPosts = allPostsData.map((postData) => (
    <BlogPostPreview postData={postData} key={postData.title} />
  ));

  return (
    <Box>
      <NextSeo
        title="Blog Posts"
        canonical={`${baseUrl}/blog`}
        openGraph={{
          title: "Blog Posts | sozonome",
          images: [
            {
              url: sznmOgImage("Blog Posts | sozonome"),
              alt: "Blog Posts | sozonome og-image",
            },
          ],
        }}
      />

      <Box marginBottom={22}>
        <Heading as="h1" size="xl" marginBottom={2}>
          Blog Posts
        </Heading>
        <Text>Just some writings</Text>
      </Box>

      <Grid gap={16} marginY={12}>
        {blogPosts}
      </Grid>
    </Box>
  );
};

export default BlogPostList;
