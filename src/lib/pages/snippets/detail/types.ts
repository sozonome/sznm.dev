import type { Snippet } from "contentlayer/generated";

export type SnippetDetailParams = {
  id: string;
};

export type SnippetDetailProps = {
  data: Snippet;
};
