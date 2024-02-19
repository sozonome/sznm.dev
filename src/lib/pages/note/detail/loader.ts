import { getNoteSlugs } from '~/lib/services/content/note';

export const generateStaticParams = () =>
  getNoteSlugs().map((item) => ({ id: item }));
