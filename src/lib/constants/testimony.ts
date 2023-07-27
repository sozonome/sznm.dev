import sortBy from 'lodash-es/sortBy';

import { allTestimonies } from 'contentlayer/generated';

export const sortedTestimonies = sortBy(allTestimonies, [
  'year',
  'name',
]).reverse();
