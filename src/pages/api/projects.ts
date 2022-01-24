import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

import initMiddleware from "lib/services/init-middleware";
import { ProjectType } from "lib/types/project";
import { getSortedProjectsData } from "lib/utils/projects";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

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
    ({ title, description, projectLink, icon }) => ({
      name: title,
      description,
      url: projectLink,
      icon: `https://sznm.dev${icon}`,
    })
  );

  await cors(req, res);

  res.statusCode = 200;
  res.json(projectList);
};

export default projects;
