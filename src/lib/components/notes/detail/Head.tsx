import { Grid, Heading, Text } from '@chakra-ui/react';
import Balancer from 'react-wrap-balancer';

import type { Note } from 'contentlayer/generated';

type NoteDetailHeadProps = {
  data: Note;
};

const NoteDetailHead = ({ data }: NoteDetailHeadProps) => {
  return (
    <Grid gap={8}>
      <Heading as="h1" size="3xl">
        <Balancer>{data.title}</Balancer>
      </Heading>
      <Text color="gray">{data.description}</Text>
    </Grid>
  );
};

export default NoteDetailHead;
