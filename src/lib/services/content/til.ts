import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import type { TodayILearn } from '~/lib/types/til';

const tilDirectory = join(process.cwd(), 'content/til');

export const getTilSlugs = () => {
  return fs.readdirSync(tilDirectory);
};

export const getTilBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(tilDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as TodayILearn;
};

export const getAllTils = () => {
  const slugs = getTilSlugs();
  return slugs
    .map((slug) => getTilBySlug(slug))
    .sort((til1, til2) => (til1.date > til2.date ? -1 : 1));
};
