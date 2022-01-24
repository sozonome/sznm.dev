import { GetStaticProps } from "next";

import { BlogPostType } from "lib/types/blog";
import { ProjectType } from "lib/types/project";
import { getSortedPostsData } from "lib/utils/posts";
import { getSortedProjectsData } from "lib/utils/projects";

import { HomeProps } from "./types";

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
