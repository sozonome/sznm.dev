import { Grid, Heading, Text } from '@chakra-ui/react';
import Balancer from 'react-wrap-balancer';

import type { Snippet } from 'contentlayer/generated';

type SnippetDetailHeadProps = {
  data: Snippet;
};

const SnippetDetailHead = ({ data }: SnippetDetailHeadProps) => {
  return (
    <Grid gap={2}>
      <Heading as="h1" size="3xl">
        <Balancer>{data.title}</Balancer>
      </Heading>
      <Text>{data.description}</Text>
    </Grid>
  );
};

export default SnippetDetailHead;
