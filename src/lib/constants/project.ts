import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import sortBy from "lodash-es/sortBy";

export const sortedProjects = allProjects
  .filter((project) => project.published !== false)
  .sort((a, b) => compareDesc(new Date(a.date ?? ""), new Date(b.date ?? "")));

export const featuredProjects = sortedProjects.filter(
  (project) => project.featured
);

export const highlightedProjects = sortedProjects.filter(
  (project) => project.highlight
);

export const sznmAppsProjects = sortBy(
  sortedProjects.filter((project) => project.sznmApps),
  ["title"]
);

export const projectIdParams = sortedProjects.map((project) => ({
  params: {
    id: project.id,
  },
}));
