import { defaultHeader } from "lib/constants/api/header";
import { sznmAppsProjects } from "lib/constants/project";

export const config = {
  runtime: "experimental-edge",
};

const projects = async () => {
  const projectList = sznmAppsProjects.map(
    ({ title, description, projectLink, icon }) => ({
      name: title,
      description,
      url: projectLink,
      icon: `https://sznm.dev${icon}`,
    })
  );

  return new Response(JSON.stringify(projectList), {
    status: 200,
    headers: {
      ...defaultHeader,
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "s-maxage=600, stale-while-revalidate=2678400",
    },
  });
};

export default projects;
