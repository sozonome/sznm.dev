import { Box, Image, Heading, Text, Flex } from "@chakra-ui/core";

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
      marginY={22}
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
          <Box alignItems="center" flexBasis={["10%"]}>
            <Image
              width={"60%"}
              margin="0 auto"
              src={postData.thumbnail}
              alt={postData.title}
            />
          </Box>
          <Box flexBasis={["90%"]} paddingLeft={[11, 22]}>
            <Heading>{postData.title}</Heading>
            <Text>{dateFormatLong(postData.date)}</Text>
          </Box>
        </Flex>
      </AccessibleLink>
    </MotionBox>
  );
};

export default BlogPostPreview;
