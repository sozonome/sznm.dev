import type { Project } from "contentlayer/generated";
import { allProjects } from "contentlayer/generated";
import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";

import initMiddleware from "lib/services/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

const projects = async (req: NextApiRequest, res: NextApiResponse) => {
  const allProjectsData: Array<Project> = allProjects.filter(
    (project) => project.published !== false && project
  );

  const sznmAppsProjects = allProjectsData
    .filter((project) => project.sznmApps === true)
    .sort((a: Project, b: Project) => {
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
  res.setHeader("Cache-Control", "s-maxage=600");
  res.json(projectList);
};

export default projects;
