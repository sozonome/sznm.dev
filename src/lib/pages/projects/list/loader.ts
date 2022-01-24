import { GetStaticProps } from "next";

import { ProjectType } from "lib/types/project";
import { getSortedProjectsData } from "lib/utils/projects";

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
