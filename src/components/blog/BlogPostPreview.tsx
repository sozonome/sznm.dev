import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

import MotionBox from "../motion/MotionBox";
import AccessibleLink from "../AccessibleLink";

import { dateFormatLong } from "../../helpers/dateFormat";

import { BlogPostType } from "../../models/blog";

type BlogPostPreviewProps = {
  postData: BlogPostType;
};

const BlogPostPreview = ({ postData }: BlogPostPreviewProps) => {
  return (
    <MotionBox
      width="100%"
      marginY={12}
      variants={{
        before: {
          opacity: 0,
          y: 20,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 200,
          },
        },
        after: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 16,
            stiffness: 200,
          },
        },
      }}
    >
      <AccessibleLink href={`/blog/${postData.id}`}>
        <Flex flexWrap={"wrap"} alignItems="center" width="100%">
          <Flex justifyContent="center" alignItems="center" flexBasis={["10%"]}>
            <Box boxSize="60%">
              <Image
                src={postData.thumbnail}
                alt={postData.title}
                width="100%"
                height="100%"
              />
            </Box>
          </Flex>
          <Box flexBasis={["90%"]} paddingLeft={[11, 22]}>
            <Heading size="lg" marginBottom={2}>
              {postData.title}
            </Heading>
            <Text>{dateFormatLong(postData.date)}</Text>
          </Box>
        </Flex>
      </AccessibleLink>
    </MotionBox>
  );
};

export default BlogPostPreview;
