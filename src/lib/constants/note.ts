import { compareDesc } from 'date-fns';

import { allNotes } from 'contentlayer/generated';

export const sortedNotes = allNotes
  .filter((note) => note.published !== false)
  .sort((a, b) => compareDesc(new Date(a.date ?? ''), new Date(b.date ?? '')));

export const noteIdParams = sortedNotes.map((note) => ({
  id: note.id,
}));
