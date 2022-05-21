import type { Blog, Project } from "contentlayer/generated";

export type HomeProps = {
  allProjectsData: Array<Project>;
  allPostsData: Array<Blog>;
};
