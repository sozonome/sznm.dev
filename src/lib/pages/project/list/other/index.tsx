import { getAllProjects } from '~/lib/services/content/project';
import { splitProjectByTypes } from '~/lib/utils/projects';

import OtherProjects from './OtherProjects';

const OtherProjectsPage = () => {
  const categorizedProjects = splitProjectByTypes(getAllProjects());

  return <OtherProjects categorizedProjects={categorizedProjects} />;
};

export default OtherProjectsPage;
