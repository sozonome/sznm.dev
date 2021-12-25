import { BlogPostType } from "models/blog";
import { ProjectType } from "models/project";

export type HomeProps = {
  allProjectsData: Array<ProjectType>;
  allPostsData: Array<BlogPostType>;
};
