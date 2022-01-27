import type { BlogPostType } from "lib/types/blog";
import type { ProjectType } from "lib/types/project";

export type HomeProps = {
  allProjectsData: Array<ProjectType>;
  allPostsData: Array<BlogPostType>;
};
