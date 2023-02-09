import type { Blog, Project } from 'contentlayer/generated';

export type HomeProps = {
  highlightedProjects: Array<Project>;
  recentPosts: Array<Blog>;
};
