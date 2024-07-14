import { type Project, allProjects } from 'content-collections';

const allPublishedProjects = allProjects.filter((item) => !!item.published);

export const getProjectSlugs = () =>
  allPublishedProjects.map((item) => item.id);

export const getProjectBySlug = (slug: string) =>
  allProjects.find((item) => item.id === slug) as Project;

export const getAllProjects = () =>
  allPublishedProjects.sort((project1, project2) =>
    project1.date > project2.date ? -1 : 1,
  );
