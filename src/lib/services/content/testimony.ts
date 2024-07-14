import { sortBy } from 'lodash-es';

import { allTestimonies } from 'content-collections';

export const getAllTestimonies = () => {
  return sortBy(allTestimonies, ['year', 'name']).reverse();
};
