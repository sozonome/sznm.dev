import type { GetStaticProps } from "next";

import { projectIdParams, sortedProjects } from "lib/constants/project";

import type { ProjectDetailParams, ProjectDetailProps } from "./types";

export const getStaticPaths = async () => {
  const paths = projectIdParams;
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ProjectDetailProps,
  ProjectDetailParams
> = async ({ params }) => {
  const projectData = sortedProjects.find(
    ({ id }) => id === (params?.id as string)
  );

  if (!projectData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projectData },
  };
};
