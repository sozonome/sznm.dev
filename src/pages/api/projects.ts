import { NextApiRequest, NextApiResponse } from "next";

import { getSortedProjectsData } from "../../helpers/projects";

import { ProjectType } from "../../models/project";

const projects = async (req: NextApiRequest, res: NextApiResponse) => {
  const allProjectsData: Array<ProjectType> = getSortedProjectsData();

  const sznmAppsProjects = allProjectsData
    .filter((project) => project.sznmApps === true)
    .sort((a: ProjectType, b: ProjectType) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });

  const projectList = sznmAppsProjects.map(
    ({ title, description, projectLink, thumbnail }) => ({
      name: title,
      description,
      url: projectLink,
      icon: `https://sznm.dev${thumbnail}`,
    })
  );

  res.statusCode = 200;
  res.json(projectList);
};

export default projects;
