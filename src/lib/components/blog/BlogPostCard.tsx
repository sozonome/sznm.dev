import { Box, Heading, Text, Flex, AspectRatio, Image } from "@chakra-ui/react";
import type { Blog } from "contentlayer/generated";
import Link from "next/link";

import type { MotionBoxProps } from "lib/components/motion/MotionBox";
import MotionBox from "lib/components/motion/MotionBox";
import Twemoji from "lib/components/Twemoji";
import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { dateFormatLong } from "lib/utils/dateFormat";
import { trackEvent } from "lib/utils/trackEvent";
import { unsplashImg } from "lib/utils/unsplashImg";

type BlogPostCardProps = {
  postData: Blog;
  wrapperProps?: MotionBoxProps;
};

const BlogPostCard = ({ postData, wrapperProps }: BlogPostCardProps) => {
  const handleClickBlogPost = () => {
    trackEvent({
      eventName: `Blog Post: ${postData.title}`,
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  };

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
          onClick={handleClickBlogPost}
        >
          <AspectRatio
            width="full"
            ratio={3 / 1}
            marginBottom={4}
            boxShadow="lg"
            borderRadius={{ base: 12, md: 24 }}
          >
            <Image
              src={unsplashImg(postData.cover)}
              fit="cover"
              borderRadius={12}
            />
          </AspectRatio>

          <Flex flexWrap="wrap" alignItems="center" width="100%">
            <Flex
              justifyContent="center"
              alignItems="center"
              flexBasis={["10%"]}
            >
              <Box boxSize="60%">
                <Twemoji emoji={postData.thumbnail ?? "📘"} />
              </Box>
            </Flex>
            <Box flexBasis={["90%"]} paddingLeft={[11, 22]}>
              <Heading size="md" marginBottom={2}>
                {postData.title}
              </Heading>
              <Text fontSize="xs" color="description">
                {dateFormatLong(postData.date)} - {postData.readTime?.text}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default BlogPostCard;
