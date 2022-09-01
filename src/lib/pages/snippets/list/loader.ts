import { allSnippets } from "contentlayer/generated";
import type { GetStaticProps } from "next";

import type { SnippetListProps } from "./types";

export const getStaticProps: GetStaticProps<SnippetListProps> = () => {
  const snippets = allSnippets.filter((snippet) => snippet.published !== false);

  return {
    props: {
      snippets,
    },
  };
};
