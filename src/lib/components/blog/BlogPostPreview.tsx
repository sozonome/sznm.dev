import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import type { Blog } from "contentlayer/generated";
import Link from "next/link";
import * as React from "react";

import type { MotionBoxProps } from "lib/components/motion/MotionBox";
import MotionBox from "lib/components/motion/MotionBox";
import Twemoji from "lib/components/Twemoji";
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
        <Flex
          as={Link}
          href={`/blog/${postData.id}`}
          aria-label={`Open ${postData.title}`}
          onClick={handleClickBlogPost}
          flexWrap="wrap"
          alignItems="center"
          width="100%"
        >
          <Flex justifyContent="center" alignItems="center" flexBasis={["10%"]}>
            <Box boxSize="60%">
              <Twemoji emoji={postData.thumbnail ?? "📘"} />
            </Box>
          </Flex>
          <Box flexBasis={["90%"]} paddingLeft={[11, 22]}>
            <Heading size="lg" marginBottom={2}>
              {postData.title}
            </Heading>
            <Text fontSize="sm">
              {dateFormatLong(postData.date)} - {postData.readTime?.text}
            </Text>
          </Box>
        </Flex>
      </Box>
    </MotionBox>
  );
};

export default BlogPostPreview;
