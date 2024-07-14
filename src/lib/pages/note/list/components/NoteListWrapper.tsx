'use client';

import debounce from 'lodash-es/debounce';
import React from 'react';

import type { Note } from 'content-collections';
import MotionBox from '~/lib/components/motion/MotionBox';
import MotionGrid from '~/lib/components/motion/MotionGrid';
import NoteCard from '~/lib/components/notes/NoteCard';
import PostSearch from '~/lib/components/shared/PostSearch';
import {
  childAnimationProps,
  staggerAnimationProps,
} from '~/lib/constants/animation';
import type { ViewCounts } from '~/lib/services/db/views';

type NoteListWrapperProps = {
  notes: Array<Note>;
  noteViewCounts: ViewCounts;
};

const NoteListWrapper = ({ notes, noteViewCounts }: NoteListWrapperProps) => {
  const [keyword, setKeyword] = React.useState<string>('');

  const filteredNotes = notes.filter((note) => {
    const title = note.title.toLowerCase();
    const desc = note.description.toLowerCase();
    const tags = note.tags?.map((tag) => tag.toLowerCase());
    const comparator = [title, desc, ...(tags ?? [])];
    const query = keyword.toLowerCase();

    let found = false;
    // biome-ignore lint/complexity/noForEach: <explanation>
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
    [],
  );
  return (
    <>
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
            <NoteCard data={item} noteViewCounts={noteViewCounts} />
          </MotionBox>
        ))}
      </MotionGrid>
    </>
  );
};

export default NoteListWrapper;
