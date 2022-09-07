import type { GetStaticProps } from "next";

import { featuredProjects } from "lib/constants/project";

import type { ProjectListProps } from "./types";

export const getStaticProps: GetStaticProps<ProjectListProps> = async () => {
  return {
    props: {
      featuredProjects,
    },
  };
};
