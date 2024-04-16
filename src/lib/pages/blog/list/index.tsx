import { Box, Grid, Heading, Text } from '@chakra-ui/react';

import BlogPostListWrapper from '~/lib/pages/blog/list/components/BlogPostListWrapper';
import { getAllPosts } from '~/lib/services/content/post';
import { getAllViewCount } from '~/lib/services/db/views';

const BlogPostList = async () => {
  const blogPosts = getAllPosts();
  const blogPostViewCounts = await getAllViewCount('/blog/');

  return (
    <Box>
      <Grid marginBottom={22} gap={2}>
        <Heading as="h1" size="xl">
          Blog Posts
        </Heading>
        <Text>Just some writings</Text>
      </Grid>

      <BlogPostListWrapper
        blogPosts={blogPosts}
        blogViewCounts={blogPostViewCounts}
      />
    </Box>
  );
};

export default BlogPostList;
