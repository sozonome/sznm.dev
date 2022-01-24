import { BlogPostType } from "lib/types/blog";
import { ProjectType } from "lib/types/project";

export type HomeProps = {
  allProjectsData: Array<ProjectType>;
  allPostsData: Array<BlogPostType>;
};
