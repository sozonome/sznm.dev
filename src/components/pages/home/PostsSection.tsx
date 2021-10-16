import {
  Box,
  Heading,
  Button,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";

import BlogPostPreview from "components/blog/BlogPostPreview";
import { BlogPostType } from "models/blog";

export type PostsSectionProps = {
  data: Array<BlogPostType>;
};

const PostsSection = ({ data }: PostsSectionProps) => {
  const buttonBackgroundColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box as="section">
      <Heading size="xl" marginBottom={2}>
        Recent Posts
      </Heading>

      <Grid marginY={12} gap={16}>
        {data
          .filter((post) => post.published === true)
          .slice(0, 2)
          .map((postData) => (
            <BlogPostPreview postData={postData} key={postData.id} />
          ))}
      </Grid>

      <Link href="/blog" passHref>
        <Button
          isFullWidth
          width="100%"
          borderRadius={20}
          height={55}
          backgroundColor={buttonBackgroundColor}
          _hover={{
            backgroundColor: "gray.300",
            color: "black",
          }}
          fontFamily="Catamaran, sans-serif"
        >
          see more
        </Button>
      </Link>
    </Box>
  );
};

export default PostsSection;
