import type { ProjectType } from "lib/types/project";

export type ProjectDetailParams = {
  id: string;
};

export type ProjectDetailProps = {
  projectData: ProjectType;
};
