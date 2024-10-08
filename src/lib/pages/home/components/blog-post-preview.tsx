'use client';

import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';

import type { Post } from 'content-collections';
import type { MotionBoxProps } from '~/lib/components/motion/motion-box';
import { MotionBox } from '~/lib/components/motion/motion-box';
import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking';
import { dateFormatLong } from '~/lib/utils/date-format';
import { trackEvent } from '~/lib/utils/track-event';

type BlogPostPreviewProps = {
  postData: Post;
  wrapperProps?: MotionBoxProps;
};

export const BlogPostPreview = ({
  postData,
  wrapperProps,
}: BlogPostPreviewProps) => {
  const hoverColor = useColorModeValue('gray.300', 'gray.50');
  const handleClickBlogPost = React.useCallback(() => {
    trackEvent({
      eventName: `Blog Post: ${postData.title}`,
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  }, [postData.title]);

  return (
    <MotionBox {...wrapperProps}>
      <Box
        width="100%"
        transition="0.4s ease-out"
        _hover={{
          color: hoverColor,
          textDecoration: 'underline',
        }}
      >
        <Box
          as={Link}
          href={`/blog/${postData.id}`}
          aria-label={`Open ${postData.title} ${dateFormatLong(
            postData.date,
          )} - ${postData.readTime?.text}`}
          onClick={handleClickBlogPost}
          flexWrap="wrap"
          alignItems="center"
          width="100%"
        >
          <Heading size="md" marginBottom={2}>
            {postData.title}
          </Heading>
          <Text fontSize="xs">
            {dateFormatLong(postData.date)} - {postData.readTime?.text}
          </Text>
        </Box>
      </Box>
    </MotionBox>
  );
};
