import { Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { getAllNotes } from '~/lib/services/content/note';
import { getAllViewCount } from '~/lib/services/db/views';

import { NoteListWrapper } from './components/note-list-wrapper';

const NoteList = async () => {
  const notes = getAllNotes();
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

      <NoteListWrapper notes={notes} noteViewCounts={noteViewCounts} />
    </Grid>
  );
};

export default NoteList;
