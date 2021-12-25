import { ProjectType } from "models/project";

export type ProjectDetailParams = {
  id: string;
};

export type ProjectDetailProps = {
  projectData: ProjectType;
};
