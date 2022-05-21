import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { GetStaticProps } from "next";

import type { OtherProjectsProps } from "./types";

export const getStaticProps: GetStaticProps<OtherProjectsProps> = async () => {
  const otherProjects = allProjects
    .sort((a, b) => compareDesc(new Date(a.date ?? ""), new Date(b.date ?? "")))
    .filter(
      (project) => !project.featured && project.published !== false && project
    );

  return {
    props: {
      otherProjects,
    },
  };
};
