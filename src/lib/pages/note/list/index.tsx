import { Grid, Heading, Text } from '@chakra-ui/react';

import MotionBox from '~/lib/components/motion/MotionBox';
import MotionGrid from '~/lib/components/motion/MotionGrid';
import NoteCard from '~/lib/components/notes/NoteCard';
import {
  childAnimationProps,
  staggerAnimationProps,
} from '~/lib/constants/animation';
import { sortedNotes } from '~/lib/constants/note';

const notes = sortedNotes;

const NoteList = () => {
  return (
    <Grid gap={12}>
      <Grid gap={2}>
        <Heading>Notes</Heading>
        <Text>
          A collection of my personal brief notes, or snippets I use throughout
          my projects.
        </Text>
      </Grid>

      <MotionGrid
        {...staggerAnimationProps}
        gap={6}
        gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      >
        {notes.map((item) => (
          <MotionBox {...childAnimationProps} key={item.id}>
            <NoteCard data={item} />
          </MotionBox>
        ))}
      </MotionGrid>
    </Grid>
  );
};

export default NoteList;
