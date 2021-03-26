import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";

import MotionBox from "../motion/MotionBox";
import Twemoji from "../Twemoji";

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
      <Link href={`/blog/${postData.id}`} passHref>
        <Flex as="a" flexWrap={"wrap"} alignItems="center" width="100%">
          <Flex justifyContent="center" alignItems="center" flexBasis={["10%"]}>
            <Box boxSize="60%">
              <Twemoji emoji={postData.thumbnail} />
            </Box>
          </Flex>
          <Box flexBasis={["90%"]} paddingLeft={[11, 22]}>
            <Heading size="lg" marginBottom={2}>
              {postData.title}
            </Heading>
            <Text>{dateFormatLong(postData.date)}</Text>
          </Box>
        </Flex>
      </Link>
    </MotionBox>
  );
};

export default BlogPostPreview;
