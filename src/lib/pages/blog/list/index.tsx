import { Heading, Box, Text, Grid } from '@chakra-ui/react';

import BlogPostListWrapper from '~/lib/pages/blog/list/components/BlogPostListWrapper';
import { getAllViewCount } from '~/lib/services/db/views';

const BlogPostList = async () => {
  const blogPostViewCounts = await getAllViewCount('/blog/');

  return (
    <Box>
      <Grid marginBottom={22} gap={2}>
        <Heading as="h1" size="xl">
          Blog Posts
        </Heading>
        <Text>Just some writings</Text>
      </Grid>

      <BlogPostListWrapper blogViewCounts={blogPostViewCounts} />
    </Box>
  );
};

export default BlogPostList;
