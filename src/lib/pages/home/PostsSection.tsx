import { Box, Button, Grid, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import BlogPostPreview from "lib/components/blog/BlogPostPreview";
import type { BlogPostType } from "lib/types/blog";
import { trackEventToUmami } from "lib/utils/trackEvent";

export type PostsSectionProps = {
  data: Array<BlogPostType>;
};

const PostsSection = ({ data }: PostsSectionProps) => {
  const handleClickViewAllPosts = () => {
    trackEventToUmami("Home: View All Posts", "navigate");
  };

  return (
    <Stack as="section" spacing={4}>
      <Heading size="lg" marginBottom={2}>
        Recent Posts
      </Heading>

      <Grid gap={8}>
        {data
          .filter((post) => post.published === true)
          .slice(0, 2)
          .map((postData) => (
            <BlogPostPreview postData={postData} key={postData.id} />
          ))}
      </Grid>

      <Box>
        <Link href="/blog" passHref>
          <Button
            as="a"
            rightIcon={<FaArrowRight />}
            paddingX={0}
            variant="ghost"
            fontFamily="heading"
            onClick={handleClickViewAllPosts}
          >
            view all posts
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default PostsSection;
