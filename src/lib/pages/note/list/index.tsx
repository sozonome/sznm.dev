import { Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import NoteListWrapper from '~/lib/pages/note/list/components/NoteListWrapper';
import { getAllViewCount } from '~/lib/services/db/views';

const NoteList = async () => {
  const noteViewCounts = await getAllViewCount('/notes/');

  return (
    <Grid gap={12}>
      <Grid gap={2}>
        <Heading>Notes</Heading>
        <Text>
          A collection of my personal brief notes, tips, short form posts, or
          snippets I use throughout my projects.
        </Text>
        <Flex>
          <Button as={Link} href="/til" size="sm" variant="outline">
            T.I.L.
          </Button>
        </Flex>
      </Grid>

      <NoteListWrapper noteViewCounts={noteViewCounts} />
    </Grid>
  );
};

export default NoteList;
