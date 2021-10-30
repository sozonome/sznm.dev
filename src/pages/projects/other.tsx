import { GetStaticProps } from "next";

import OtherProjects, {
  OtherProjectsProps,
} from "components/pages/projects/list/other";
import { ProjectType } from "models/project";
import { getSortedProjectsData } from "utils/projects";

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

export default OtherProjects;
