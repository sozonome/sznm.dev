import { allSnippets } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const sortedSnippets = allSnippets
  .filter((snippet) => snippet.published !== false)
  .sort((a, b) => compareDesc(new Date(a.date ?? ""), new Date(b.date ?? "")));

export const snippetIdParams = sortedSnippets.map((snippet) => ({
  params: {
    id: snippet.id,
  },
}));
