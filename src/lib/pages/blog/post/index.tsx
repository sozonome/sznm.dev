import { AspectRatio, Box, Grid, Image } from '@chakra-ui/react';
import { notFound } from 'next/navigation';

import BlogPostHead from '~/lib/components/blog/post/Head';
import BlogPostMeta from '~/lib/components/blog/post/Meta';
import GiscusWrapper from '~/lib/components/shared/GiscusWrapper';
import MarkdownContent from '~/lib/components/shared/MarkdownContent';
import ShareButtons from '~/lib/components/shared/ShareButtons';
import { sortedBlogPosts } from '~/lib/constants/blog';
import { unsplashImg } from '~/lib/utils/unsplashImg';

import type { BlogPostProps } from './types';

const BlogPost = ({ params }: BlogPostProps) => {
  const postData = sortedBlogPosts.find(({ id }) => id === params.id);

  if (!postData) {
    notFound();
  }

  return (
    <Box as="article">
      <BlogPostMeta postData={postData} />
      <AspectRatio
        width="full"
        ratio={3 / 1}
        marginBottom={8}
        boxShadow="lg"
        borderRadius={{ base: 12, md: 24 }}
      >
        <Image
          src={unsplashImg(postData.cover, 2160)}
          fit="cover"
          borderRadius={{ base: 12, md: 24 }}
        />
      </AspectRatio>
      <BlogPostHead postData={postData} />
      <MarkdownContent rawContent={postData.body.raw} />
      <Grid marginY={12} gap={8}>
        <ShareButtons title={`Check out this blog post: ${postData.title}`} />
        <GiscusWrapper category="Blog Post" categoryId="DIC_kwDOD-UOjM4B_fhR" />
      </Grid>
    </Box>
  );
};

export default BlogPost;
