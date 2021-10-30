import { GetStaticProps } from "next";

import ProjectList, { ProjectListProps } from "components/pages/projects/list";
import { ProjectType } from "models/project";
import { getSortedProjectsData } from "utils/projects";

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

export default ProjectList;
