import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const sortedProjects = allProjects
  .filter((project) => project.published !== false)
  .sort((a, b) => compareDesc(new Date(a.date ?? ""), new Date(b.date ?? "")));

export const featuredProjects = sortedProjects.filter(
  (project) => project.featured
);

export const highlightedProjects = sortedProjects.filter(
  (project) => project.highlight
);

export const sznmAppsProjects = sortedProjects
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

export const projectIdParams = sortedProjects.map((project) => ({
  params: {
    id: project.id,
  },
}));
