import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { ProjectType } from "lib/types/project";
import { getAllProjectIds, getProjectData } from "lib/utils/projects";

import { ProjectDetailParams, ProjectDetailProps } from "./types";

export const getStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ProjectDetailProps,
  ProjectDetailParams
> = async ({ params }) => {
  const projectData = (await getProjectData(
    (params as ParsedUrlQuery).id as string
  )) as ProjectType;

  return {
    props: { projectData },
  };
};
