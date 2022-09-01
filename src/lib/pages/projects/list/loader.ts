import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { GetStaticProps } from "next";

import type { ProjectListProps } from "./types";

export const getStaticProps: GetStaticProps<ProjectListProps> = async () => {
  const featuredProjects = allProjects
    .sort((a, b) => compareDesc(new Date(a.date ?? ""), new Date(b.date ?? "")))
    .filter((project) => project.featured && project.published !== false);

  return {
    props: {
      featuredProjects,
    },
  };
};
