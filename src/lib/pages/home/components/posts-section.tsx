'use client';

import { Box, Button, Grid, Heading, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import type { Post } from 'content-collections';
import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking';
import { trackEvent } from '~/lib/utils/track-event';

import { BlogPostPreview } from './blog-post-preview';

type PostsSectionProps = {
  data: Array<Post>;
};

export const PostsSection = ({ data }: PostsSectionProps) => {
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
