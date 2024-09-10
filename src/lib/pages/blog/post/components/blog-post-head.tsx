import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import Balancer from 'react-wrap-balancer';

import type { Post } from 'content-collections';
import { DetailViewCounts } from '~/lib/components/detail-view-counts';
import { ShareButtons } from '~/lib/components/share-buttons';
import { dateFormatLong } from '~/lib/utils/date-format';

type BlogPostHeadProps = {
  postData: Post;
};

export const BlogPostHead = ({ postData }: BlogPostHeadProps) => {
  return (
    <Grid gap={12} marginBottom={12}>
      <Grid gap={8}>
        <Heading as="h1" size="xl">
          <Balancer>{postData.title}</Balancer>
        </Heading>

        <Box>
          <Text fontSize="sm" color="gray">
            {dateFormatLong(postData.date)} - {postData.readTime?.text}
            {' | '}
            <DetailViewCounts slug={`/blog/${postData.id}`} as="span" />
          </Text>
        </Box>
      </Grid>

      <ShareButtons title={`Check out this blog post: ${postData.title}`} />
    </Grid>
  );
};
