import { GetStaticProps } from "next";

import { ProjectType } from "models/project";
import { getSortedProjectsData } from "utils/projects";

import { OtherProjectsProps } from "./types";

// eslint-disable-next-line import/prefer-default-export
export const getStaticProps: GetStaticProps<OtherProjectsProps> = async () => {
  const otherProjects = getSortedProjectsData().filter(
    (project: ProjectType) =>
      !project.featured && project.published !== false && project
  );

  return {
    props: {
      otherProjects,
    },
  };
};
