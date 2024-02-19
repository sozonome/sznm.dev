import fs from 'fs';
import matter from 'gray-matter';
import { sortBy } from 'lodash-es';
import { join } from 'path';

import type { Testimony } from '~/lib/types/testimony';

const testimonyDirectory = join(process.cwd(), 'content/testimonies');

export const getTestimonySlugs = () => {
  return fs.readdirSync(testimonyDirectory);
};

export const getTestimonyBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(testimonyDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Testimony;
};

export const getAllTestimonies = () => {
  const slugs = getTestimonySlugs();
  return sortBy(
    slugs.map((slug) => getTestimonyBySlug(slug)),
    ['year', 'name']
  ).reverse();
};
