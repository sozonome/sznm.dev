import { AspectRatio, Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import Balancer from 'react-wrap-balancer';

import type { Post } from 'content-collections';
import type { MotionBoxProps } from '~/lib/components/motion/motion-box';
import { MotionBox } from '~/lib/components/motion/motion-box';
import { ViewCounter } from '~/lib/components/view-counter';
import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking';
import type { ViewCounts } from '~/lib/services/db/views';
import { dateFormatLong } from '~/lib/utils/date-format';
import { trackEvent } from '~/lib/utils/track-event';
import { unsplashImg } from '~/lib/utils/unsplash-img';

type BlogPostCardProps = {
  postData: Post;
  wrapperProps?: MotionBoxProps;
  blogViewCounts: ViewCounts;
};

export const BlogPostCard = ({
  postData,
  wrapperProps,
  blogViewCounts,
}: BlogPostCardProps) => {
  const handleClickBlogPost = React.useCallback(() => {
    trackEvent({
      eventName: `Blog Post: ${postData.title}`,
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  }, [postData.title]);

  const viewCount =
    blogViewCounts.find((item) => item.slug?.includes(postData.id))?.count ?? 0;

  return (
    <MotionBox {...wrapperProps}>
      <Grid
        as={Link}
        href={`/blog/${postData.id}`}
        aria-label={`Open ${postData.title} ${dateFormatLong(
          postData.date,
        )} - ${postData.readTime?.text}`}
        onClick={handleClickBlogPost}
        width="100%"
        gap={4}
        transition="0.2s ease-out"
        _hover={{
          transform: 'scale(1.03, 1.03)',
        }}
      >
        <AspectRatio
          width="full"
          ratio={3 / 1}
          boxShadow="lg"
          borderRadius={{ base: 12, md: 24 }}
        >
          <Image
            src={unsplashImg(postData.cover)}
            fit="cover"
            borderRadius={12}
            alt={`${postData.title} Blog Post Image Cover`}
          />
        </AspectRatio>

        <Box>
          <Heading size="md" marginBottom={2}>
            <Balancer>{postData.title}</Balancer>
          </Heading>
          <Text fontSize="xs" color="gray">
            {dateFormatLong(postData.date)} - {postData.readTime?.text}
            {' | '}
            <ViewCounter
              slug={`/blog/${postData.id}`}
              count={viewCount}
              as="span"
            />
          </Text>
        </Box>
      </Grid>
    </MotionBox>
  );
};
