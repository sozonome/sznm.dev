import type { GetStaticProps } from "next";

import type { BlogPostType } from "lib/types/blog";
import type { ProjectType } from "lib/types/project";
import { getSortedPostsData } from "lib/utils/posts";
import { getSortedProjectsData } from "lib/utils/projects";

import type { HomeProps } from "./types";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allProjectsData: Array<ProjectType> = getSortedProjectsData();
  const allPostsData: Array<BlogPostType> = getSortedPostsData();

  return {
    props: {
      allProjectsData,
      allPostsData,
    },
  };
};
