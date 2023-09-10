import { Box, Grid, Heading, Link, Text } from '@chakra-ui/react';
import Balancer from 'react-wrap-balancer';

import type { Blog } from 'contentlayer/generated';
import DetailViewCounts from '~/lib/components/shared/DetailViewCounts';
import ShareButtons from '~/lib/components/shared/ShareButtons';
import { dateFormatLong } from '~/lib/utils/dateFormat';

type BlogPostHeadProps = {
  postData: Blog;
};

const BlogPostHead = ({ postData }: BlogPostHeadProps) => {
  return (
    <Grid gap={2} marginBottom={12}>
      <Box flexBasis={['80%']}>
        <Heading as="h1" size="2xl" marginBottom={8}>
          <Balancer>{postData.title}</Balancer>
        </Heading>
        <Link href="/about" isExternal>
          <Text fontSize="sm">Agustinus Nathaniel</Text>
        </Link>

        <Text fontSize="xs">
          {dateFormatLong(postData.date)} - {postData.readTime?.text}
          {' | '}
          <DetailViewCounts slug={`/blog/${postData.id}`} as="span" />
        </Text>
      </Box>

      <ShareButtons title={`Check out this blog post: ${postData.title}`} />
    </Grid>
  );
};

export default BlogPostHead;
