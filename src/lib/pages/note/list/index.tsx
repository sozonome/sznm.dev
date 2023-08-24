'use client';

import { Grid, Heading, Text } from '@chakra-ui/react';
import debounce from 'lodash-es/debounce';
import React from 'react';

import MotionBox from '~/lib/components/motion/MotionBox';
import MotionGrid from '~/lib/components/motion/MotionGrid';
import NoteCard from '~/lib/components/notes/NoteCard';
import PostSearch from '~/lib/components/shared/PostSearch';
import {
  childAnimationProps,
  staggerAnimationProps,
} from '~/lib/constants/animation';
import { sortedNotes } from '~/lib/constants/note';

const notes = sortedNotes;

const NoteList = () => {
  const [keyword, setKeyword] = React.useState<string>('');

  const filteredNotes = notes.filter((note) => {
    const title = note.title.toLowerCase();
    const desc = note.description.toLowerCase();
    const tags = note.tags?.map((tag) => tag.toLowerCase());
    const comparator = [title, desc, ...(tags ?? [])];
    const query = keyword.toLowerCase();

    let found = false;
    comparator.forEach((key) => {
      if (key.includes(query)) {
        found = true;
      }
    });
    return found;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeKeyword = React.useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value);
    }, 150),
    []
  );

  return (
    <Grid gap={12}>
      <Grid gap={2}>
        <Heading>Notes</Heading>
        <Text>
          A collection of my personal brief notes, tips, short form posts, or
          snippets I use throughout my projects.
        </Text>
      </Grid>

      <PostSearch
        keyword={keyword}
        onChange={handleChangeKeyword}
        placeholder="Search Note"
      />

      <MotionGrid
        {...staggerAnimationProps}
        gap={6}
        gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      >
        {filteredNotes.map((item) => (
          <MotionBox {...childAnimationProps} key={item.id}>
            <NoteCard data={item} />
          </MotionBox>
        ))}
      </MotionGrid>
    </Grid>
  );
};

export default NoteList;
