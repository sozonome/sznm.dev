import { Box, Heading, Text, AspectRatio, Image, Grid } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import Balancer from 'react-wrap-balancer';

import type { Blog } from 'contentlayer/generated';
import type { MotionBoxProps } from '~/lib/components/motion/MotionBox';
import MotionBox from '~/lib/components/motion/MotionBox';
import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking';
import { dateFormatLong } from '~/lib/utils/dateFormat';
import { trackEvent } from '~/lib/utils/trackEvent';
import { unsplashImg } from '~/lib/utils/unsplashImg';

type BlogPostCardProps = {
  postData: Blog;
  wrapperProps?: MotionBoxProps;
};

const BlogPostCard = ({ postData, wrapperProps }: BlogPostCardProps) => {
  const handleClickBlogPost = React.useCallback(() => {
    trackEvent({
      eventName: `Blog Post: ${postData.title}`,
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  }, [postData.title]);

  return (
    <MotionBox {...wrapperProps}>
      <Grid
        as={Link}
        href={`/blog/${postData.id}`}
        aria-label={`Open ${postData.title}`}
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
          />
        </AspectRatio>

        <Box>
          <Heading size="md" marginBottom={2}>
            <Balancer>{postData.title}</Balancer>
          </Heading>
          <Text fontSize="xs">
            {dateFormatLong(postData.date)} - {postData.readTime?.text}
          </Text>
        </Box>
      </Grid>
    </MotionBox>
  );
};

export default BlogPostCard;
