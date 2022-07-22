import { allSnippets } from "contentlayer/generated";
import type { GetStaticProps } from "next";

import type { SnippetListProps } from "./types";

export const getStaticProps: GetStaticProps<SnippetListProps> = () => {
  const snippets = allSnippets;

  return {
    props: {
      snippets,
    },
  };
};
