import { getAllProjects } from '~/lib/services/content/project';

export const featuredProjects = getAllProjects().filter(
  (project) => project.featured,
);

export const highlightedProjects = getAllProjects().filter(
  (project) => project.highlight,
);

export const sznmAppsProjects = getAllProjects()
  .filter((project) => project.sznmApps)
  .sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
