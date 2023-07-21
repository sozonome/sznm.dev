import { Grid, Heading, Text } from '@chakra-ui/react';
import Balancer from 'react-wrap-balancer';

import type { Note } from 'contentlayer/generated';

type NoteDetailHeadProps = {
  data: Note;
};

const NoteDetailHead = ({ data }: NoteDetailHeadProps) => {
  return (
    <Grid gap={2}>
      <Heading as="h1" size="3xl">
        <Balancer>{data.title}</Balancer>
      </Heading>
      <Text>{data.description}</Text>
    </Grid>
  );
};

export default NoteDetailHead;
