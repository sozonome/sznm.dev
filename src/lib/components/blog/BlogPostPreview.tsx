import { Box, Heading, Text } from "@chakra-ui/react";
import type { Blog } from "contentlayer/generated";
import Link from "next/link";
import * as React from "react";

import type { MotionBoxProps } from "lib/components/motion/MotionBox";
import MotionBox from "lib/components/motion/MotionBox";
import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { dateFormatLong } from "lib/utils/dateFormat";
import { trackEvent } from "lib/utils/trackEvent";

type BlogPostPreviewProps = {
  postData: Blog;
  wrapperProps?: MotionBoxProps;
};

const BlogPostPreview = ({ postData, wrapperProps }: BlogPostPreviewProps) => {
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
        transition="0.2s ease-out"
        _hover={{
          transform: "scale(1.03, 1.03)",
        }}
      >
        <Box
          as={Link}
          href={`/blog/${postData.id}`}
          aria-label={`Open ${postData.title}`}
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

export default BlogPostPreview;
