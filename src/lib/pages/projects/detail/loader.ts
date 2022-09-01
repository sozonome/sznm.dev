import type { Project } from "contentlayer/generated";
import { allProjects } from "contentlayer/generated";
import type { GetStaticProps } from "next";

import type { ProjectDetailParams, ProjectDetailProps } from "./types";

export const getStaticPaths = async () => {
  const paths = allProjects
    .filter((project) => project.published !== false)
    .map((project) => ({
      params: {
        id: project.id,
      },
    }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ProjectDetailProps,
  ProjectDetailParams
> = async ({ params }) => {
  const projectData = allProjects.find(
    ({ id }) => id === (params?.id as string)
  ) as Project;

  return {
    props: { projectData },
  };
};
