import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import type { Blog } from "contentlayer/generated";

import Twemoji from "lib/components/Twemoji";
import { dateFormatLong } from "lib/utils/dateFormat";

type BlogPostHeadProps = {
  postData: Blog;
};

const BlogPostHead = ({ postData }: BlogPostHeadProps) => {
  return (
    <Flex alignItems="center" marginBottom={24}>
      <Box flexBasis={["80%"]}>
        <Heading
          as="h1"
          size={{ base: "2xl", sm: "3xl", md: "4xl" }}
          marginBottom={8}
        >
          {postData.title}
        </Heading>
        <Link href="/about" isExternal>
          <Text>Agustinus Nathaniel</Text>
        </Link>

        <Text fontSize="sm">
          {dateFormatLong(postData.date)} - {postData.readTime?.text}
        </Text>
      </Box>

      <Flex flexBasis={["20%"]}>
        <Box marginLeft="auto" width="60%">
          <Twemoji emoji={postData.thumbnail ?? "📘"} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default BlogPostHead;
