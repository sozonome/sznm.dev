import { defaultHeader } from '~/lib/constants/api/header';
import { sznmAppsProjects } from '~/lib/constants/project';

const getProjectsAPIRoute = async () => {
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
      'access-control-allow-origin': '*',
      'cache-control': 's-maxage=600, stale-while-revalidate=2678400',
    },
  });
};

export default getProjectsAPIRoute;
