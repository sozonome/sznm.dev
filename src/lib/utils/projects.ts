import type { Project } from 'contentlayer/generated';

export const splitProjectByTypes = (projects: Array<Project>) => {
  const apps = projects.filter((entry) => entry.projectType === 'apps');
  const sites = projects.filter((entry) => entry.projectType === 'sites');
  const templates = projects.filter(
    (entry) => entry.projectType === 'templates'
  );
  const docs = projects.filter((entry) => entry.projectType === 'docs');
  const libs = projects.filter((entry) => entry.projectType === 'libs');

  return {
    apps,
    sites,
    templates,
    docs,
    libs,
  };
};
