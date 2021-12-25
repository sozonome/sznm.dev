import { GetStaticProps } from "next";

import { BlogPostType } from "models/blog";
import { ProjectType } from "models/project";
import { getSortedPostsData } from "utils/posts";
import { getSortedProjectsData } from "utils/projects";

import { HomeProps } from "./types";

// eslint-disable-next-line import/prefer-default-export
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
