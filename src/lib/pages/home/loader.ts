import type { GetStaticProps } from "next";

import { sortedBlogPosts } from "lib/constants/blog";
import { highlightedProjects } from "lib/constants/project";

import type { HomeProps } from "./types";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const recentPosts = sortedBlogPosts.slice(0, 2);

  return {
    props: {
      highlightedProjects,
      recentPosts,
    },
  };
};
