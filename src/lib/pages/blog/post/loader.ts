import { getPostSlugs } from '~/lib/services/content/post';

export const generateStaticParams = () => {
  return getPostSlugs().map((item) => ({ id: item }));
};
