import { getProjectSlugs } from '~/lib/services/content/project';

export const generateStaticParams = () => {
  return getProjectSlugs().map((item) => ({ id: item }));
};
