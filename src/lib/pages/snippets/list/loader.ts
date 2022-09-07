import type { GetStaticProps } from "next";

import { sortedSnippets } from "lib/constants/snippet";

import type { SnippetListProps } from "./types";

export const getStaticProps: GetStaticProps<SnippetListProps> = () => {
  const snippets = sortedSnippets;

  return {
    props: {
      snippets,
    },
  };
};
