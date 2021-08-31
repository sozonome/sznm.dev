import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import fs from "fs";
import { NextSeo } from "next-seo";

import BlogPostPreview from "components/blog/BlogPostPreview";
import generateRss from "helpers/generateRss";
import { getSortedPostsData } from "helpers/posts";
import { sznmOgImage } from "helpers/sznmOgImage";
import { BlogPostType } from "models/blog";

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
      <NextSeo
        title="Blog Posts"
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
