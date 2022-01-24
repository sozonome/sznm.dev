import { GetStaticProps } from "next";

import { ProjectType } from "lib/types/project";
import { getSortedProjectsData } from "lib/utils/projects";

import { OtherProjectsProps } from "./types";

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
