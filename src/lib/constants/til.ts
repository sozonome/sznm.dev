import { compareDesc } from 'date-fns';

import { allTodayILearns } from 'contentlayer/generated';

export const sortedTodayILearns = allTodayILearns
  .filter((note) => note.published !== false)
  .sort((a, b) => compareDesc(new Date(a.date ?? ''), new Date(b.date ?? '')));
