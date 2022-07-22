import type { Snippet } from "contentlayer/generated";
import { allSnippets } from "contentlayer/generated";
import type { GetStaticProps } from "next";

import type { SnippetDetailParams, SnippetDetailProps } from "./types";

export const getStaticPaths = async () => {
  const paths = allSnippets.map((project) => ({
    params: {
      id: project.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  SnippetDetailProps,
  SnippetDetailParams
> = async ({ params }) => {
  const data = allSnippets.find(
    ({ id }) => id === (params?.id as string)
  ) as Snippet;

  return {
    props: { data },
  };
};
