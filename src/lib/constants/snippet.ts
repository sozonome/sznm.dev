import { compareDesc } from 'date-fns';

import { allSnippets } from 'contentlayer/generated';

export const sortedSnippets = allSnippets
  .filter((snippet) => snippet.published !== false)
  .sort((a, b) => compareDesc(new Date(a.date ?? ''), new Date(b.date ?? '')));

export const snippetIdParams = sortedSnippets.map((snippet) => ({
  id: snippet.id,
}));
