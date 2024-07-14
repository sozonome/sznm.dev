import type { Project } from 'content-collections';

export const splitProjectByTypes = (projects: Array<Project>) => {
  const filteredProjects = projects.filter(
    (item) => !(item.featured || item.highlight),
  );
  const apps = filteredProjects.filter((entry) => entry.projectType === 'apps');
  const sites = filteredProjects.filter(
    (entry) => entry.projectType === 'sites',
  );
  const templates = filteredProjects.filter(
    (entry) => entry.projectType === 'templates',
  );
  const docs = filteredProjects.filter((entry) => entry.projectType === 'docs');
  const libs = filteredProjects.filter((entry) => entry.projectType === 'libs');

  return {
    apps,
    sites,
    templates,
    docs,
    libs,
  };
};
