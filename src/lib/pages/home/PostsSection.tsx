'use client';

import { Box, Button, Grid, Heading, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import type { Blog } from 'contentlayer/generated';
import BlogPostPreview from '~/lib/components/blog/BlogPostPreview';
import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking';
import { trackEvent } from '~/lib/utils/trackEvent';

export type PostsSectionProps = {
  data: Array<Blog>;
};

const PostsSection = ({ data }: PostsSectionProps) => {
  const handleClickViewAllPosts = React.useCallback(() => {
    trackEvent({
      eventName: 'Home: View All Posts',
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  }, []);

  return (
    <Stack as="section" spacing={4}>
      <Heading size="lg" marginBottom={2}>
        Recent Posts
      </Heading>

      <Grid gap={8}>
        {data.map((postData) => (
          <BlogPostPreview postData={postData} key={postData.id} />
        ))}
      </Grid>

      <Box>
        <Button
          as={Link}
          href="/blog"
          rightIcon={<FaArrowRight />}
          size="lg"
          fontFamily="heading"
          variant="outline"
          onClick={handleClickViewAllPosts}
        >
          view all posts
        </Button>
      </Box>
    </Stack>
  );
};

export default PostsSection;
