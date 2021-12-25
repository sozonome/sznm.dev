import { GetStaticProps } from "next";

import { ProjectType } from "models/project";
import { getSortedProjectsData } from "utils/projects";

import { ProjectListProps } from "./types";

export const getStaticProps: GetStaticProps<ProjectListProps> = async () => {
  const featuredProjects = getSortedProjectsData().filter(
    (project: ProjectType) =>
      project.featured && project.published !== false && project
  );

  return {
    props: {
      featuredProjects,
    },
  };
};
