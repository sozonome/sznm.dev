import type { GetStaticProps } from "next";

import { snippetIdParams, sortedSnippets } from "lib/constants/snippet";

import type { SnippetDetailParams, SnippetDetailProps } from "./types";

export const getStaticPaths = async () => {
  const paths = snippetIdParams;
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  SnippetDetailProps,
  SnippetDetailParams
> = async ({ params }) => {
  const data = sortedSnippets.find(({ id }) => id === (params?.id as string));

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
